import React from "react";
import { useLocation } from "react-router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import ProfileWidget from "../../components/profile-components/ProfileWidget";
import StudentRank from "../../components/profile-components/StudentRank";
import Project from "../../components/profile-components/Projects";
import ProjectTable from "../../components/profile-components/Projects";
import GraphWidget from "../../components/profile-components/GraphWidget";

const ProfilePage = () => {
  const location = useLocation();
  const id = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);

  const studentsData = [
    {
      id: 10000000,
      name: "Varshith",
      branch: "CSE",
      rollno: 245,
      section: "A",
    },
    {
      id: 10000001,
      name: "Rohith",
      branch: "CSE",
      rollno: 246,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000003,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
  ];

  const account = studentsData.find((acc) => acc.id == id);

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
    <div
      style={{ width: "100%", padding: "25px", position: "relative" }}
      className="flex text-text-primary"
    >
      <div>
        <ProfileWidget />
      </div>
      <div>
        <div>
          <div style={{ display: "flex" }}>
            <StudentRank />
            <GraphWidget />
          </div>

          <div
            style={{ marginTop: "20px", display: "flex", alignItems: "center" }}
          >
            {/* Circle with Progress Bars */}
            <div>
              <ProjectTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
