import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import ProfileWidget from "../../../components/profile-components/ProfileWidget";
import StudentRank from "../../../components/profile-components/StudentRank";
import Project from "../../../components/profile-components/Projects";
import ProjectTable from "../../../components/profile-components/Projects";
import GraphWidget from "../../../components/profile-components/GraphWidget";

const ProfilePage = () => {
  const location = useLocation();
  const id = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);
  const [display, setDisplay] = useState(false);
  const [students, setStudents] = useState();
  const [account, setAccout] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3001/getStudent";
      const res = await fetch(url);
      const data = await res.json();
      setDisplay(true);
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
        <div
          style={{ width: "100%", padding: "25px", position: "relative" }}
          className="flex text-text-primary"
        >
          <div>
            <ProfileWidget props={students} />
          </div>
          <div>
            <div>
              <div style={{ display: "flex" }}>
                <StudentRank />
                <GraphWidget />
              </div>

              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Circle with Progress Bars */}
                <div>
                  <ProjectTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
