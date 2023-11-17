import React from "react";
import { useLocation } from "react-router";

const ProfilePage = () => {
  const location = useLocation();
  const id = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);

  const studentsData = [
    {
      id: 10000000,
      name: "Rohith",
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

  return (
    <div>
      <h2>{account.name}'s Account</h2>
      {/* Display other account details */}
    </div>
  );
};

export default ProfilePage;
