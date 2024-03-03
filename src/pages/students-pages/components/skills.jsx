import React, { useEffect, useState } from "react";
import { TbUserEdit } from "react-icons/tb";
import Modal from "../profile-page/modal";
import Select from "react-select";
import Cookies from "js-cookie";

function Skills() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [proficiencyLevels, setProficiencyLevels] = useState({});

  const user = Cookies.get("student_id");

  const [displayedSkills, setDisplayedSkills] = useState([]);

  useEffect(() => {
    const fetchData = async (student_id) => {
      const url = `http://localhost:3001/studentSkills/?userId=${student_id}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const { skills, proficiency } = data;
      const combinedSkills = skills.map((skill, index) => ({
        value: skill,
        label: skill,
        proficiencyLevel: proficiency[index],
      }));
      if (skills === undefined || proficiency === undefined) {
        return;
      }
      setDisplayedSkills(combinedSkills);
    };
    fetchData(user);
  }, []);

  // Simulated skills options (replace with actual data)
  const skillOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "SQL", label: "SQL" },
    { value: "Git", label: "Git" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Angular", label: "Angular" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "PHP", label: "PHP" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Ruby", label: "Ruby" },
    { value: "Swift", label: "Swift" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Sass", label: "Sass" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "AWS", label: "AWS" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  // Handle proficiency level change for a skill
  const handleProficiencyChange = (skill, value) => {
    setProficiencyLevels({ ...proficiencyLevels, [skill.value]: value });
  };

  const handleUpdateProfile = () => {
    try {
      // Combine selected skills and proficiency levels
      const combinedSkills = selectedSkills.map((skill) => ({
        ...skill,
        proficiencyLevel: proficiencyLevels[skill.value] || "",
      }));
      const skills = combinedSkills.map((skill) => skill.value);
      const proficiency = combinedSkills.map((skill) => skill.proficiencyLevel);
      // update the skills in the database
      const url = `http://localhost:3001/studentSkills/?userId=${user}`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user,
          skills: skills,
          proficiency: proficiency,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Render stars based on proficiency level
  const renderStars = (level) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= level ? "gold" : "gray" }}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  // Custom styles for React Select
  const customStyles = {
    control: (styles) => ({
      ...styles,
      color: "black", // Text color
    }),
    option: (styles) => ({
      ...styles,
      color: "black", // Text color
    }),
  };

  const [profileUpdateModal, setProfileUpdateModal] = useState(false);

  const styles = {
    container: {
      margin: "10px",
      minHeight: "auto",
      backgroundColor: "#333",
      height: "10rem",
      color: "#fff",
      padding: "20px",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Skills</div>
        <button
          style={{ marginLeft: "15rem" }}
          onClick={() => {
            setProfileUpdateModal(!profileUpdateModal);
          }}
          className="flex rounded-full h-10 w-10 p-2 bg-indigo-700 items-center justify-center"
        >
          <TbUserEdit size={32} />
        </button>
      </div>
      {/* Render the Modal component conditionally */}
      {profileUpdateModal && (
        <Modal
          isOpen={profileUpdateModal}
          onClose={() => {
            setProfileUpdateModal(!profileUpdateModal);
          }}
        >
          <div className="h-full w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              Update your skills:
              <div className="flex flex-col gap-2">
                <Select
                  isMulti
                  placeholder="Select skills..."
                  options={skillOptions}
                  onChange={handleChange}
                  value={selectedSkills}
                  styles={customStyles} // Apply custom styles
                />
                {selectedSkills.map((skill) => (
                  <div key={skill.value}>
                    <label htmlFor={skill.value}>
                      {skill.label}
                      {":"}
                    </label>
                    <input
                      type="number"
                      id={skill.value}
                      value={proficiencyLevels[skill.value] || ""}
                      onChange={(e) =>
                        handleProficiencyChange(skill, e.target.value)
                      }
                      min="1"
                      max="5"
                      style={{
                        marginLeft: "1rem",
                        textAlign: "center",
                        color: "black",
                      }} // Set text color to black
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleUpdateProfile}
              className="bg-indigo-600 h-8 rounded-md"
            >
              Update Profile
            </button>
          </div>
        </Modal>
      )}
      {/* Display selected skills and proficiency levels */}
      <div>
        {displayedSkills.map((skill) => (
          <div key={skill.value}>
            <span>{skill.label}: </span>
            <span>{renderStars(skill.proficiencyLevel)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
