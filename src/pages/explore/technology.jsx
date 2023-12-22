import react from "./background/REACT.jpg";
import angular from "./background/ANGULAR.jpg";
import vue from "./background/vue.jpg";
import node from "./background/NODE.jpg";
import python from "./background/PYTHON.jpg";
import ruby from "./background/RUBY.jpg";
import java from "./background/JAVA.jpg";
import php from "./background/PHP.jpg";
import express from "./background/EXPRESS.jpg";
import flask from "./background/FLASK.jpg";
import mysql from "./background/MYSQL.jpg";
import mongodb from "./background/MONGO.jpg";
import flutter from "./background/FLUTTER.jpg";
import reactn from "./background/REACTN.jpg";
import kotlin from "./background/KOTLIN.jpg";

const Technology = () => {
  const styles = {
    container: {
      margin: "20px",
      height: "100%",
      width: "22em",
      display: "inline-block", // Set display to inline-block
      backgroundColor: "#333",
      color: "#fff",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
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
      objectFit: "cover", // Ensure the image covers the entire space
    },
  };

  return (
    <div>
      <div
        style={styles.title}
        className="text-5xl font-bold font-mono text-gray-400"
      >
        Technology
      </div>
      <div style={{ marginLeft: "110px" }}>
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={react}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={angular}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={vue}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={node}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={python}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={ruby}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={java}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={php}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={express}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={flask}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={mysql}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={mongodb}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={flutter}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={reactn}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={kotlin}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </button>
        </div>
        {/* .......................................................................................................................... */}
      </div>
    </div>
  );
};

export default Technology;
