import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import ProfileWidget from "../../../components/profile-components/ProfileWidget";
import StudentRank from "../../../components/profile-components/StudentRank";
import Project from "../../../components/profile-components/Projects";
import ProjectTable from "../../../components/profile-components/Projects";
import GraphWidget from "../../../components/profile-components/GraphWidget";
import Projt from "../components/projt";


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


  const [emailId, setEmailId] = useState("");
  const [name, setName] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const[followers,setFollowers] = useState([])
  const [following,setFollowing] = useState([])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };


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
      const followers_list = temp[0].followers
      const following_list = temp[0].following
      const follow = data.filter(each => followers_list.includes(each.StudentProfileId))
      setFollowers(follow);
      const follow1 = data .filter(each => following_list.includes(each.StudentProfileId))
      setFollowing(follow1)
      console.log(temp);
      const followers_list = temp[0].followers;
      const following_list = temp[0].following;
      const follow = data.filter((each) =>
        followers_list.includes(each.StudentProfileId)
      );
      setFollowers(follow);
      const follow1 = data.filter((each) =>
        followers_list.includes(each.StudentProfileId)
      );
      setFollowing(follow1);
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
  const chartData = {
    labels: Array.from({ length: 12 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Submissions in the Year",
        data: account.submissions || [],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Submissions",
        },
      },
    },
  };
  const progressData = {
    easy: 50,
    medium: 30,
    hard: 20,
  };
  const styles = {
    userProfile: {
      margin: "10px",
      minHeight: "auto",
      backgroundColor: "#333",
      width: "280px",
      color: "#fff",
      padding: "20px",
      overflow: "hidden",
      borderRadius: "10px",
      border: null,
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
  };
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
                    </div>
                    <h2 className=" text-sm text-white">
                      {students[0].College} ({students[0].StudentBranch})
                    </h2>
                  </div>
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
                  <div>
                    <button onClick={openModal} className="text-white mr-5">Following</button>

                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        
                        <h2 className="text-white text-center font-sans text-xl font-bold mb-3">Following</h2>

                        <table className=" text-center table table-bordered table-hover rounded-full">
                            <thead className="table-header-group text-muted">
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>COLLEGE</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {following.map(each =>(
                                    <tr>
                                        <td>{each.StudentId}</td>
                                        <td><a className="text-orange-500">{each.StudentName}</a><br/><a className="text-green-500">{each.StudentEmail}</a></td>
                                        <td>{each.College}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Modal>
                    </div>
                    <div>
                      <button onClick={openModal1} className="text-white mr-1">Followers</button>

                      <Modal isOpen={isModalOpen1} onClose={closeModal1}>
                      <h2 className="text-white text-center font-sans text-xl font-bold mb-3">Followers</h2>

                        <table className=" text-center table table-bordered table-hover rounded-full">
                            <thead className="table-header-group text-muted">
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>COLLEGE</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {followers.map(each =>(
                                    <tr>
                                        <td>{each.StudentId}</td>
                                        <td><a className="text-orange-500">{each.StudentName}</a><br/><a className="text-green-500">{each.StudentEmail}</a></td>
                                        <td>{each.College}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                      </Modal>
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
