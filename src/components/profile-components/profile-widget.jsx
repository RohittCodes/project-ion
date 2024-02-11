import React from "react";
import profilePhoto from "./profilepic.jpg";

const ProfileWidget = (props) => {
  console.log(props.props[0].StudentName);
  const user = {
    profilePhoto: profilePhoto,
    user: props.props[0].StudentName,
    userid: props.props[0].StudentProfileId,
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
    h1: {
      fontWeight: "bold",
      fontSize: "20px",
      margin: "10px",
    },
    h2: {
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
      marginBottom: "25px",
    },
    svgIcon: {
      marginRight: "5px", // Adjust the margin as needed
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

          <li style={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-dots-fill"
              viewBox="0 0 16 16"
              style={styles.svgIcon}
            >
              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <div style={{ display: "inline-block" }}>
              <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
                Discuss: {user.discuss}
              </h1>
              <br />
              <h1>Last week: 0</h1>
            </div>
          </li>

          {/* reputation......................................................................... */}

          <li style={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
              style={styles.svgIcon}
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <div style={{ display: "inline-block" }}>
              <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
                Reputation: {user.reputation}
              </h1>
              <br />
              <h1>Last week: 0</h1>
            </div>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h1 style={styles.subTitle}>Languages</h1>
        <div>
          <div style={styles.language}>
            <h1>Python</h1>
          </div>
          <div style={styles.language}>
            <h1>Java</h1>
          </div>
          <div style={styles.language}>
            <h1>Cpp</h1>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>he</h1>
        <h1>s</h1>
        <h1>d</h1>
      </div>
    </div>
  );
};
export default ProfileWidget;
