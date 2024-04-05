import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "animate.css";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
  const location = useLocation();

  // student id from the route
  const id = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);
  console.log(id);
  const [project, setProject] = useState();
  const [display, setDisplay] = useState(false);
  const [techStacks, setTech] = useState();
  const [like, setLike] = useState(false);

  // Fetching projects
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3001/getProjects";
      const res = await fetch(url);
      const data = await res.json();
      const list = data.filter((each) => each.data.ProjectId == id);
      setProject(list);
      console.log(list);
      let tech = list[0].data.Technologies.split(",");
      setTech(tech);
      setDisplay(true);
      const id1 = Cookies.get("student_id");
      console.log(id1);
      if (list[0].data.Likes.includes(id1)) {
        setLike(true);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Function to handle likes
  const LikeProject = async () => {
    const id = Cookies.get("student_id");
    if (project[0].data.Likes.includes(id)) {
      alert("You already liked this project");
    } else {
      let list = project[0].data.Likes;
      list.push(id);
      let url = "http://localhost:3001/updateLikes";
      console.log(project[0].data);
      const updateData = {
        id: project[0].data.ProjectId,
        likes: list,
        student_id: project[0].data.StudentProfileId,
      };
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });
      const data = await response.json();

      alert(data);

      window.location.reload();
    }
  };

  return (
    <>
      {display && (
        <div
          className="container p-1 mb-4"
          style={{ minHeight: "100vh", backgroundSize: "cover" }}
        >
          <div style={{ textAlign: "center", width: "100%" }}>
            <h1
              style={{ color: "white", fontSize: "30px" }}
              className="mt-4 mb-5 "
            >
              {project[0].data.Name}
            </h1>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
              }}
              className="container"
            >
              <div>
                <h1 style={{ color: "white", fontSize: "50px" }}>Abstract </h1>
                <hr style={{ color: "white" }} />
                <p
                  style={{ color: "white", fontSize: "18px" }}
                  className="mt-3 animate__animated animate__fadeInUp"
                >
                  {project[0].data.OverView}
                </p>
              </div>
              <h1
                style={{ color: "white", fontSize: "50px" }}
                className="mt-5 mb-4"
              >
                Results
              </h1>
              <hr style={{ color: "white" }} className="mt-2 mb-4" />
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="animate__animated animate__fadeInUp"
              >
                <Slider {...settings} style={{ width: "80%" }}>
                  <div>
                    <img
                      src={`${project[0].data.ProjectImages1}`}
                      style={{ height: "60vh", width: "100%" }}
                      alt="Image 1"
                    />
                  </div>
                  <div>
                    <img
                      src={`${project[0].data.ProjectImages2}`}
                      style={{ height: "60vh", width: "100%" }}
                      alt="Image 2"
                    />
                  </div>
                  <div>
                    <img
                      src={`${project[0].data.ProjectImages3}`}
                      style={{ height: "60vh", width: "100%" }}
                      alt="Image 3"
                    />
                  </div>
                  {/* Add more slides as needed */}
                </Slider>
              </div>
              <div>
                <h1
                  style={{ color: "white", fontSize: "50px" }}
                  className="mt-5 mb-4"
                >
                  Project Outcome{" "}
                </h1>
                <hr style={{ color: "white" }} />
                <p
                  style={{ color: "white", fontSize: "18px" }}
                  className="mt-3 animate__animated animate__fadeInUp"
                >
                  {project[0].data.Outcome}
                </p>
              </div>
            </div>
            <div
              style={{ width: "40%", marginLeft: "80px" }}
              className="mt-4 container"
            >
              <div
                style={{
                  marginTop: "2rem",
                  minHeight: "auto",
                  backgroundColor: "#333",
                  color: "#fff",
                  padding: "20px",
                  overflow: "hidden",
                  borderRadius: "10px",
                  border: "1px solid #fff",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <div style={{ display: "flex" }}>
                  <h1
                    style={{ color: "white", fontSize: "20px", width: "30%" }}
                    className="mt-4"
                  >
                    Developer{" "}
                  </h1>
                  <h1
                    style={{ color: "white", fontSize: "20px" }}
                    className="mt-4"
                  >
                    :
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      marginTop: "22px",
                      fontSize: "20px",
                      width: "75%",
                    }}
                    className="ml-5 animate__animated animate__fadeInUp"
                  >
                    {project[0].data.Developer}
                  </h1>
                </div>
                <div style={{ display: "flex" }}>
                  <h1
                    style={{ color: "white", fontSize: "20px", width: "30%" }}
                    className="mt-4"
                  >
                    College
                  </h1>
                  <h1
                    style={{ color: "white", fontSize: "20px" }}
                    className="mt-4"
                  >
                    :
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      marginTop: "28px",
                      fontSize: "20px",
                      width: "75%",
                    }}
                    className="ml-5 animate__animated animate__fadeInUp"
                  >
                    {project[0].data.College}
                  </h1>
                </div>
                <div style={{ display: "flex" }}>
                  <h1
                    style={{ color: "white", fontSize: "20px", width: "30%" }}
                    className="mt-4"
                  >
                    Domain{" "}
                  </h1>
                  <h1
                    style={{ color: "white", fontSize: "20px" }}
                    className="mt-4"
                  >
                    :
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      marginTop: "22px",
                      fontSize: "20px",
                      width: "75%",
                    }}
                    className="ml-5 animate__animated animate__fadeInUp"
                  >
                    {project[0].data.Domain}
                  </h1>
                </div>
                <div style={{ display: "flex" }}>
                  <h1
                    style={{ color: "white", fontSize: "20px", width: "30%" }}
                    className="mt-4"
                  >
                    Project Id{" "}
                  </h1>
                  <h1
                    style={{ color: "white", fontSize: "20px" }}
                    className="mt-4"
                  >
                    :
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      marginTop: "22px",
                      fontSize: "20px",
                      width: "75%",
                    }}
                    className="ml-5 animate__animated animate__fadeInUp"
                  >
                    {project[0].data.ProjectId}
                  </h1>
                </div>

                <div style={{ display: "flex" }}>
                  <h1
                    style={{ color: "white", fontSize: "20px", width: "30%" }}
                    className="mt-4"
                  >
                    github
                  </h1>
                  <h1
                    style={{ color: "white", fontSize: "20px" }}
                    className="mt-4"
                  >
                    :
                  </h1>
                  <h1
                    style={{
                      color: "#89CFF0",
                      marginTop: "28px",
                      fontSize: "20px",
                      width: "75%",
                    }}
                    className="ml-5 cursor-pointer"
                  >
                    <a href={project[0].data.ProjectLink} target="_blank">
                      {project[0].data.ProjectLink}
                    </a>
                  </h1>
                </div>
                <div style={{ display: "flex" }}>
                  <h1
                    style={{ color: "white", fontSize: "20px", width: "30%" }}
                    className="mt-4"
                  >
                    Date
                  </h1>
                  <h1
                    style={{ color: "white", fontSize: "20px" }}
                    className="mt-4"
                  >
                    :
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      marginTop: "28px",
                      fontSize: "20px",
                      width: "75%",
                    }}
                    className="ml-5"
                  >
                    {project[0].data.Date}
                  </h1>
                </div>
                <div style={{ display: "flex" }}>
                  <h1
                    style={{ color: "white", fontSize: "20px", width: "30%" }}
                    className="mt-4"
                  >
                    Collaborators
                  </h1>
                  <h1
                    style={{ color: "white", fontSize: "20px" }}
                    className="mt-4"
                  >
                    :
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      marginTop: "28px",
                      fontSize: "20px",
                      width: "75%",
                    }}
                    className="ml-5"
                  >
                    {project[0].data.Collaborators}
                  </h1>
                </div>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  minHeight: "auto",
                  backgroundColor: "#333",
                  color: "#fff",
                  padding: "20px",
                  overflow: "hidden",
                  borderRadius: "10px",
                  border: "1px solid #fff",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <h1 style={{ color: "white", fontSize: "25px" }}>
                  Software Used
                </h1>
                <hr className="mt-2" style={{ color: "white" }} />
                <div className="flex flex-wrap pt-2">
                  {techStacks.map((each) => (
                    <div className="bg-indigo-500 p-2 m-2 rounded-lg">
                      <p className="text-white font-bold text-base">{each}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  minHeight: "auto",
                  backgroundColor: "#333",
                  color: "#fff",
                  padding: "20px",
                  overflow: "hidden",
                  borderRadius: "10px",
                  border: "1px solid #fff",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <h1 style={{ color: "white", fontSize: "25px", width: "25%" }}>
                  Like/Dislike
                </h1>
                <hr style={{ color: "white" }} />
                <h1 style={{ color: "white" }} className="mt-2"></h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    gap: "2rem ",
                  }}
                  className="mt-2"
                >
                  {!like ? (
                    <button
                      className="btn mt"
                      style={{ width: "25%", alignSelf: "center" }}
                      onClick={LikeProject}
                    >
                      <FcLikePlaceholder size={50} />
                    </button>
                  ) : (
                    <button
                      className="btn mt"
                      style={{ width: "25%", alignSelf: "center" }}
                      onClick={LikeProject}
                    >
                      <FcLike size={50} />
                    </button>
                  )}

                  {like ? "you Liked this" : "Like"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
