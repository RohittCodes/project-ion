import React, { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";

const AddStudents = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState(false);
  // Initial formData for adding students
  const [formData, setFormData] = useState({
    StudentName: "",
    StudentId: "",
    StudentYear: "",
    StudentBranch: "",
    StudentSection: "",
    StudentEmail: "",
    StudentPassword: "",
    StudentLinkedin: "",
    College: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3001/getStudent";
      const res = await fetch(url);
      const data = await res.json();
      setCount(data.length);
      setDisplay(true);
    };
    fetchData();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // method to add student
  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    formData["likes"] = 0;
    formData["following"] = [];
    formData["followers"] = [];
    formData["StudentProfileId"] = "student_" + count;
    const url = "http://localhost:3001/addStudent";
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(url, requestOptions);

    const data1 = await res.json();
    console.log(data1);
    setFormData({
      StudentName: "",
      StudentId: "",
      StudentYear: "",
      StudentBranch: "",
      StudentSection: "",
      StudentEmail: "",
      StudentPassword: "",
      StudentLinkedin: "",
      College: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {display ? (
        <div className="container mt-0 flex justify-center items-center p-4">
          <form
            onSubmit={submitForm}
            className="p-5 border-1 w-full rounded-lg"
          >
            <h1 className="text-white text-center mb-4 font-sans font-bold text-2xl">
              STUDENT DETAILS FORM
            </h1>
            <div className="flex justify-center items-center h-[1px] bg-gray-700 rounded-full" />
            <div className="flex gap-10 mt-1">
              <div className="w-1/2">
                <label className="mb-1 mt-3 text-text-primary">
                  STUDENT NAME
                </label>
                <input
                  style={{ color: "black", fontWeight: "bolder" }}
                  className="form-control"
                  type="text"
                  onChange={handleInputChange}
                  name="StudentName"
                  value={formData.StudentName}
                  placeholder="Student Name"
                />
              </div>
              <div className="w-1/2">
                <label style={{ color: "white" }} className="mb-1 mt-3">
                  STUDENT ID
                </label>
                <input
                  style={{ color: "black", fontWeight: "bolder" }}
                  className="form-control"
                  type="text"
                  onChange={handleInputChange}
                  name="StudentId"
                  value={formData.StudentId}
                  placeholder="Student ID"
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-1/2">
                <label style={{ color: "white" }} className="mb-1 mt-3">
                  COLLEGE NAME
                </label>
                <input
                  style={{ color: "black", fontWeight: "bolder" }}
                  className="form-control"
                  type="text"
                  onChange={handleInputChange}
                  name="College"
                  value={formData.College}
                  placeholder="College Name"
                />
              </div>
              <div className="w-1/2 ml-10">
                <label style={{ color: "white" }} className="mb-1 mt-3">
                  STUDENT EMAIL ID{" "}
                </label>
                <input
                  style={{ color: "black", fontWeight: "bolder" }}
                  className="form-control"
                  type="text"
                  onChange={handleInputChange}
                  name="StudentEmail"
                  value={formData.StudentEmail}
                  placeholder="Student Email ID"
                />
              </div>
            </div>
            <div className="flex mt-4 gap-10">
              <div className="w-1/2">
                <label style={{ color: "white" }} className="mb-1 mt-3">
                  STUDENT LINKEDIN
                </label>
                <input
                  style={{ color: "black", fontWeight: "bolder" }}
                  className="form-control"
                  type="text"
                  onChange={handleInputChange}
                  name="StudentLinkedin"
                  value={formData.StudentLinkedin}
                  placeholder="Linkedin Profile Link"
                />
              </div>
              <div className="w-1/2">
                <label style={{ color: "white" }} className="mb-1 mt-3">
                  STUDENT PASSWORD{" "}
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    style={{
                      color: "black",
                      fontWeight: "bolder",
                      width: "90%",
                    }}
                    className="form-control mr-2"
                    type={showPassword ? "text" : "password"}
                    onChange={handleInputChange}
                    name="StudentPassword"
                    value={formData.StudentPassword}
                    placeholder="********"
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    type="button"
                    className="btn btn-outline-danger w-20"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-1/3">
                <label style={{ color: "white" }} className="mb-1 mt-3">
                  STUDENT YEAR
                </label>
                <input
                  style={{ color: "black", fontWeight: "bolder" }}
                  className="form-control"
                  type="text"
                  onChange={handleInputChange}
                  name="StudentYear"
                  value={formData.StudentYear}
                  placeholder="Studying Year"
                />
              </div>
              <div className="w-1/3 ml-10">
                <label style={{ color: "white" }} className="mb-1 mt-3">
                  STUDENT BRANCH
                </label>
                <input
                  style={{ color: "black", fontWeight: "bolder" }}
                  className="form-control"
                  type="text"
                  onChange={handleInputChange}
                  name="StudentBranch"
                  value={formData.StudentBranch}
                  placeholder="Branch Name"
                />
              </div>
              <div className="w-1/3 ml-10">
                <label style={{ color: "white" }} className="mb-1 mt-3">
                  STUDENT SECTION
                </label>
                <input
                  style={{ color: "black", fontWeight: "bolder" }}
                  className="form-control"
                  type="text"
                  onChange={handleInputChange}
                  name="StudentSection"
                  value={formData.StudentSection}
                  placeholder="Section Name"
                />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn btn-outline-info mt-5 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Triangle
            height="100"
            width="100"
            color="white"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default AddStudents;
