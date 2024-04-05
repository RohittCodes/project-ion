import React from "react";
import profilePhoto from "./profilepic.png";

const Profilew = (props) => {
  console.log(props);
  const student = props.student[0];
  console.log(student);
  const user = {
    profilePhoto: profilePhoto,
    user: student.StudentName,
    userid: student.StudentId,
    rank: props.rank,
    views: "10",
    solutions: "2",
    discuss: "5",
    reputation: "4.5",
    language: "python",
  };

  const styles = {
    userProfile: {
      margin: "10px",
      minHeight: "auto",
      backgroundColor: "#333",
      width: "360px",
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
    <div className="w-[360px] h-full bg-[#333] mt-[10px] text-white p-4 rounded-lg border border-white shadow-lg">
      <div className="flex space-x-4">
        <div
          src={user.profilePhoto}
          alt="..."
          className="h-[100px] w-[100px] rounded-full border-2 bg-black border-white"
        />
        <div className="w-2/3 flex flex-col justify-center">
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-xl">{user.user}</h1>
            <h2 className="text-lg">{user.userid}</h2>
            <div className="flex items-center">
              <h1>Rank: </h1>
              <h1 className="font-bold">{user.rank}</h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-0 h-[1px] w-full bg-white my-4" />

      <div>
        <h1 className="text-xl font-bold">Contribution stats (March)</h1>
        <ul className="flex flex-col mt-2">
          <li className="flex items-center mb-4 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="aqua"
              className="bi bi-eye-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            <div>
              <h1 className="font-bold">Views: {user.views}</h1>
              <h1>Last week: 5</h1>
            </div>
          </li>

          <li className="flex items-center mb-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2-square mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0
            v5a1.5 1.5 0 0 1-1.5 1.5H3z"
              />

              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <div>
              <h1 className="font-bold">Projects: {user.solutions}</h1>
              <h1>Last week: 1</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Profilew;
