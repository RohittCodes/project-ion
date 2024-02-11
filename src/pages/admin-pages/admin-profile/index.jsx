import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import Graph from "../../../components/admin-profile/graph";
import { AiOutlineRise } from "react-icons/ai";
import Data from "../../../components/admin-profile/teachers";
import Table from "../../../components/admin-profile/student-table";
import logo from "./kmit.jpg";

const AdminProfile = () => {
  const styles = {
    container: {
      padding: "10px",
      height: "auto",
      width: "350px",
      display: "inline-block",
      backgroundColor: "#333",
      color: "#fff",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
    about: {
      margin: "20px",
      padding: "10px",
      height: "auto",
      width: "1400px",
      display: "inline-block",
      backgroundColor: "#333",
      color: "#fff",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
    box: {
      margin: "20px",
      height: "auto",
      width: "700px",
      display: "grid",
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateColumns: "repeat(2, 1fr)",
      columnGap: "10px",
      rowGap: "10px",
    },
    title: {
      margin: "10px",
      marginLeft: "20px",
    },
    card: {
      position: "relative",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div>
      <div
        style={styles.title}
        className="text-3xl font-bold font-mono text-gray-400"
      >
        About College
      </div>
      <div style={styles.about}>
        <div className="flex flex-row">
          <div style={{ height: "50px", margin: "10px", marginRight: "20px" }}>
            <img src={logo} alt="" />
          </div>
          <div style={{ fontSize: "20px" }}>
            <p>
              Welcome to Elite University, a beacon of academic excellence since
              1950. Our streamlined admissions process invites you to apply
              online by [Application Deadline] with a $50 fee. Offering majors
              in Computer Science, Business Administration, Psychology, and
              Environmental Science, Elite University stands out with unique
              programs like Accelerated 4+1 Master's. Our campus provides
              cutting-edge facilities, diverse housing options, and over 50
              student clubs. With a low student-to-faculty ratio of 15:1, our
              150+ distinguished professors ensure personalized learning.
              Financial aid, including scholarships and grants, is available,
              and tuition is $25,000 per semester (excluding room and board).
              Follow us on social media for updates, take a virtual tour, and
              explore our image gallery. Ranked #1 in the state for
              undergraduate research, Elite University is not just an
              institution; it's a community dedicated to your success. For
              inquiries, contact admissions at [Phone Number] or [Email
              Address]. Join us at Elite University for a transformative
              academic journey.
            </p>
          </div>
        </div>
      </div>
      <div
        style={styles.title}
        className="text-3xl font-bold font-mono text-gray-400"
      >
        Dashboard
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="grid-container" style={styles.box}>
          <div style={styles.container}>
            <div className="flex flex-row gap-4 w-full items-center h-28 px-4 py-2 ">
              <div className="text-2xl rounded-full bg-blue-400 p-2">
                <HiUserGroup />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div className=" text-gray-400 font-semibold">
                  Total Students
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-semibold font-mono">25,237</div>
                  <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                    <AiOutlineRise />
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.container}>
            <div className="flex flex-row gap-4 w-full items-center h-28 px-4 py-2">
              <div className="text-2xl rounded-full bg-green-400 p-2">
                <MdPersonAddAlt1 />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div className="text-gray-400 font-semibold">New Students</div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-semibold font-mono">237</div>
                  <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                    <AiOutlineRise />
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.container}>
            <div className="flex flex-row gap-4 w-full items-center h-28 px-4 py-2 ">
              <div className="text-2xl rounded-full bg-red-400 p-2">
                <FaBook />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div className="text-gray-400 font-semibold">Course</div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-semibold font-mono">2000</div>
                  <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                    <AiOutlineRise />
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.container}>
            <div className="flex flex-row gap-4 w-full items-center h-28 px-4 py-2 ">
              <div className="text-2xl rounded-full bg-teal-400 p-2">
                <LuView />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div className="text-gray-400 font-semibold">Visitors</div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-semibold font-mono">897</div>
                  <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
                    <AiOutlineRise />
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Graph />
      </div>
      <div className="flex flex-row">
        <div>
          <Data />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
