import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { TbUserEdit } from "react-icons/tb";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import ProfileWidget from "../../../components/profile-components/ProfileWidget";
import StudentRank from "../../../components/profile-components/StudentRank";
import Project from "../../../components/profile-components/Projects";
import ProjectTable from "../../../components/profile-components/Projects";
import GraphWidget from "../../../components/profile-components/GraphWidget";
import Projt from "../components/projt";
import Cookies from "js-cookie";
import Modal from "./modal";

const ProfilePage = () => {
  const location = useLocation();
  const id = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);
  const [display, setDisplay] = useState(false);
  const [students, setStudents] = useState();
  const [account, setAccout] = useState(false);
  const [rank, setRank] = useState();
  const [yourporjects, setYourProjects] = useState([]);

  const userId = Cookies.get("student_id");
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [profileUpdateModal, setProfileUpdateModal] = useState(false);
  const [followingModal, setFollowingModal] = useState(false);
  const [followersModal, setFollowersModal] = useState(false);

  const [emailId, setEmailId] = useState("");
  const [name, setName] = useState("");
  const [linkedinId, setLinkedinId] = useState("");

  const handlePasswordChange = (e) => {
    setUpdatedPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLinkedinIdChange = (e) => {
    setLinkedinId(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3001/getStudent";
      const res = await fetch(url);
      const data = await res.json();
      setDisplay(true);
      console.log(data);
      data.sort((a, b) => b.likes - a.likes);
      let rank = data.findIndex((item) => item.StudentProfileId == id);
      setRank(rank);
      console.log(data);
      console.log(data[0].StudentProfileId == id);
      console.log(data[0].StudentProfileId);
      console.log(id);
      const temp = data.filter((acc) => acc.StudentProfileId == id);
      setStudents(temp);
      console.log(temp);
      if (temp.length > 0) {
        setAccout(true);
        console.log(temp.length);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const someData = async () => {
      const url = "http://localhost:3001/getProjects";
      const res = await fetch(url);
      const data = await res.json();
      const data1 = data.filter((each) => each.data.StudentProfileId === id);
      setYourProjects(data1);
    };
    someData();
  }, []);

  const handleUpdatePassword = async (userId, updatedPassword) => {
    try {
      const response = await fetch(
        "http://localhost:3001/updateStudentPassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            updatedPassword: updatedPassword,
          }),
        }
      );

      const responseData = await response.json();

      if (responseData.success) {
        console.log("Password updated successfully");
      } else {
        console.error("Password update failed");
      }
    } catch (error) {
      console.error("Error updating password: ", error);
    }
  };

  const handleUpdateProfile = async (name, linkedinId, emailId, userId) => {
    try {
      const response = await fetch("http://localhost:3001/updateStudent", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          linkedinId: linkedinId,
          emailId: emailId,
          userId: userId,
        }),
      });

      console.log(
        JSON.stringify({
          name: name,
          linkedinId: linkedinId,
          emailId: emailId,
          userId: userId,
        })
      );
      const responseData = await response.json();

      if (responseData.success) {
        console.log("Profile updated successfully");
      } else {
        console.error("Profile update failed");
      }
    } catch (error) {
      console.error("Error updating details: ", error);
    }
  };

  if (!account) {
    return <div>Account not found</div>;
  }

  return (
    <>
      {display && (
        <div className="flex flex-col w-full px-4 py-4 ">
          <div className="flex px-4 py-2 bg-[#1f2937] gap-4 w-full rounded-xl">
            <div className="rounded-full h-36 w-36 bg-black" />
            <div className="flex flex-col pt-2 w-[calc(100%-160px)]">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full">
                  <div className="flex w-full justify-between items-center">
                    <h1 className="text-xl text-white">
                      {students[0].StudentName}
                    </h1>
                    <div className="flex gap-2 items-center">
                      <p className=" text-sm text-white">
                        Profile Id: {students[0].StudentId}
                      </p>
                      {userId === id ? (
                        <>
                          <button
                            onClick={() => {
                              setProfileUpdateModal(!profileUpdateModal);
                            }}
                            className="flex rounded-full h-10 w-10 p-2 bg-indigo-700 items-center justify-center"
                          >
                            <TbUserEdit size={32} />
                          </button>
                          <Modal
                            isOpen={profileUpdateModal}
                            onClose={() => {
                              setProfileUpdateModal(!profileUpdateModal);
                            }}
                          >
                            <div className="h-full w-full flex flex-col gap-4">
                              <div className="flex flex-col gap-1">
                                Profile Details:
                                <div className="flex flex-col gap-2">
                                  <label htmlFor="name">Name</label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="rounded-md h-8 text-black"
                                    onChange={handleNameChange}
                                  />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <label htmlFor="name">LinkedIn</label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="rounded-md h-8 text-black"
                                    onChange={handleLinkedinIdChange}
                                  />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <label htmlFor="name">Email ID</label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="rounded-md h-8 text-black"
                                    onChange={handleEmailChange}
                                  />
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  handleUpdateProfile(
                                    name,
                                    linkedinId,
                                    emailId,
                                    userId
                                  );
                                }}
                                className="bg-indigo-600 h-8 rounded-md"
                              >
                                Update Profile
                              </button>
                              <div>
                                Update Password:
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    id="password"
                                    className="w-full h-8 text-black rounded-md"
                                    value={updatedPassword}
                                    onChange={handlePasswordChange}
                                  />
                                  <button
                                    className="bg-indigo-600 h-8 w-40 rounded-md"
                                    onClick={() =>
                                      handleUpdatePassword(
                                        userId,
                                        updatedPassword
                                      )
                                    }
                                  >
                                    Reset Password
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Modal>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <h2 className=" text-sm text-white">
                    {students[0].College} ({students[0].StudentBranch})
                  </h2>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col w-full">
                    <p className="text-white">Ranking: {rank}</p>
                    <p className="text-white">
                      LinkedIn:{" "}
                      <a
                        href={`https://linkedin.com/in/${students[0].StudentLinkedin}`}
                        target="_blank"
                      >
                        Visit LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Projt projects={yourporjects} />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
