import React from "react";
import { NavLink } from "react-router-dom";
import profilePhoto from "./profilepic.jpg";

const Profilew = (props) => {
  const user = {
    profilePhoto: profilePhoto,
    user: "dheeraj",
    userid: "14333333",
    rank: "10,000",
    views: "10",
    solutions: "100",
    discuss: "5",
    reputation: "4.5",
    language: "python",
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
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
    profilePhoto: {
      float: "left",
      margin: "10px",
      width: "100px",
      height: "100px",
      borderRadius: "10%",
      border: "2px solid #fff",
    },
    userInfo: {
      float: "right",
    },
    heading1: {
      fontWeight: "bold",
      fontSize: "20px",
      margin: "10px",
    },
    heading2: {
      fontSize: "15px",
      margin: "10px",
    },
    subTitle: {
      fontSize: "17.5px",
      margin: "10px",
      fontWeight: "bold",
    },
    hr: {
      border: "0",
      height: "1px",
      width: "100%",
      background: "#fff",
      margin: "20px 0",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    svgIcon: {
      marginRight: "5px",
      fill: "aqua",
    },
    language: {
      margin: "2px",
      minHeight: "auto",
      backgroundColor: "#343a40",
      display: "inline-block",
      color: "#fff",
      padding: "10px",
      overflow: "hidden",
      borderRadius: "15px",
      border: "1px solid #fff",
    },
  };

  return (
    <div style={styles.userProfile}>
      <div style={{ display: "flex" }}>
        <div style={styles.profilePhoto}>
          <img src={user.profilePhoto} alt="..." />
        </div>
        <div style={styles.userInfo}>
          <div style={styles.h1}>
            <h1>{user.user}</h1>
          </div>
          <div style={styles.h2}>
            <h2>{user.userid}</h2>
          </div>
          <div style={{ margin: "10px", display: "inline-block" }}>
            <h1>Rank: </h1>
          </div>
          <div style={{ fontWeight: "bold", display: "inline-block" }}>
            <h1> {user.rank}</h1>
          </div>
        </div>
      </div>

      <hr style={styles.hr} />

      <div>
        <h1 style={styles.subTitle}>Community stats</h1>
        <ul>
          {/* views......................................................................................... */}

          <li style={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="aqua"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
              style={styles.svgIcon}
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            <div style={{ display: "inline-block" }}>
              <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
                Views: {user.views}
              </h1>
              <br />
              <h1>Last week: 0</h1>
            </div>
          </li>

          {/* solutions........................................................................................ */}

          <li style={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              style={styles.svgIcon}
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <div style={{ display: "inline-block" }}>
              <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
                Solutions: {user.solutions}
              </h1>
              <br />
              <h1>Last week: 0</h1>
            </div>
          </li>

          {/* discuss............................................................................................. */}
        </ul>
      </div>
    </div>
  );
};
export default Profilew;
