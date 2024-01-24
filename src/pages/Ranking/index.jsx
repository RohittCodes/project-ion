import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Ranking = () => {
  const [display, setDisplay] = useState(false);
  const [students, setStudents] = useState();
  const [adminStatus, setAdminStatus] = useState(true);
  const [colleges, setColleges] = useState();
  const [status, setStatus] = useState(true);
  const student_id = Cookies.get("student_id");

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3001/getStudent";
      const url1 = "http://localhost:3001/getAdmin";

      const res = await fetch(url);
      const res1 = await fetch(url1);

      const data = await res.json();
      const data1 = await res1.json();
      let admin = window.location.pathname.startsWith("/admin");
      setAdminStatus(!admin);

      data1.sort((a, b) => b.likes - a.likes);
      data.sort((a, b) => b.likes - a.likes);
      setStudents(data);
      setColleges(data1);
      setDisplay(true);
    };
    fetchData();
  }, []);

  const getStudents = () => {
    setStatus(true);
  };

  const getColleges = () => {
    setStatus(false);
  };

  const follow = async (data) => {
    const info = {
      user: data.StudentProfileId,
      self: student_id,
    };

    const url = "http://localhost:3001/addfollower";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    window.location.reload();
  };

  let Ranking = 4;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "93%" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          style={{ width: "15vw" }}
          onClick={getStudents}
          className="btn btn-outline-warning mt-5 ml-5"
        >
          Students Ranking
        </button>
        <button
          style={{ width: "15vw" }}
          onClick={getColleges}
          className="btn btn-outline-warning mt-5 ml-5"
        >
          College Ranking
        </button>
      </div>
      <div
        className="rounded-lg overflow-hidden h-auto w-full m-4"
        style={{ width: "100%" }}
      >
        {display ? (
          <>
            {status ? (
              <table className="table table-bordered table-hover table-dark rounded-xxl">
                <thead className="table-header-group text-muted">
                  <tr>
                    <th className="text-center h-12">RANKING</th>
                    <th className="text-center h-12">STUDENT ID</th>
                    <th className="text-center h-12">NAME</th>
                    <th className="text-center h-12">BRANCH</th>
                    <th className="text-center h-12">COLLEGE NAME</th>
                    {adminStatus && <th className="text-center h-12">FOLLOW</th>}
                    <th className="text-center h-12">PROFILE</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  {students.map((data, index) => (
                    <tr key={index}>
                      <td className="text-center" style={{ width: "16%" }}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/744/744984.png"
                          style={{ height: "5vh", width: "16%" }}
                        />
                      </td>
                      <td className="text-center" style={{ width: "16%" }}>
                        {data.StudentId}
                      </td>
                      <td className="text-center" style={{ width: "16%" }}>
                        {data.StudentName}
                      </td>
                      <td className=" text-center" style={{ width: "16%" }}>
                        {data.StudentBranch}
                      </td>
                      <td className="text-center" style={{ width: "16%" }}>
                        {data.College}
                      </td>
                      {adminStatus && (
                        <td className="text-center" style={{ width: "16%" }}>
                          <button
                            className="btn btn-close-white"
                            style={{
                              backgroundColor: `${
                                data.followers.includes(student_id)
                                  ? "green"
                                  : "red"
                              }`,
                              color: "white",
                            }}
                            onClick={() => follow(data)}
                          >
                            {data.followers.includes(student_id)
                              ? "Following"
                              : "Follow"}
                          </button>
                        </td>
                      )}
                      <td className="h-8 w-24 text-center">
                        <Link
                          to={`/student/profile/${data.StudentProfileId}`}
                          className="btn btn-primary"
                        >
                          Profile
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="table table-bordered table-hover table-dark rounded-xxl">
                <thead className="table-header-group text-muted">
                  <tr>
                    <th className="text-center h-12">RANKING</th>
                    <th className="text-center h-12">COLLEGE NAME</th>
                    <th className="text-center h-12">CITY</th>
                    <th className="text-center h-12">STATE</th>
                    <th className="text-center h-12">EMAIL</th>
                    <th className="text-center h-12">PROFILE</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  {colleges.map((each, index) => (
                    <tr key={each.id}>
                      <td
                        className="text-center"
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/744/744984.png"
                          style={{ height: "5vh" }}
                        />
                      </td>
                      <td className="text-center" style={{ width: "20%" }}>
                        {each.collegename}
                      </td>
                      <td className="text-center" style={{ width: "21%" }}>
                        {each.city}
                      </td>
                      <td className=" text-center" style={{ width: "25%" }}>
                        {each.state}
                      </td>
                      <td className="text-center" style={{ width: "20%" }}>
                        {each.email}
                      </td>
                      <td className="text-center" style={{ width: "20%" }}>
                        <Link
                          to={`/student/profile/${each.StudentProfileId}`}
                        >
                          Profile
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "65vh",
            }}
          >
            <Triangle
              height="100"
              width="100"
              color="yellow"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranking;
