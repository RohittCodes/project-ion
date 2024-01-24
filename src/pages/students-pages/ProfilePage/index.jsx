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
              {
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full">
                    <div className="flex w-full justify-between items-center">
                      <h1 className="text-xl text-white">
                        {students[0].StudentName}
                      </h1>
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
                </div>
              }
            </div>
          </div>
          <Projt projects={yourporjects} />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
