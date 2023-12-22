import React from "react";
import artificial from "./background/ARTIFICIAL.jpg";
import blockchain from "./background/BLOCKCHAIN.jpg";
import cyber from "./background/CYBER.jpg";
import data from "./background/data.jpg";
import game from "./background/GAME.jpg";
import machine from "./background/machine.jpg";
import web from "./background/WEB.jpg";
import robo from "./background/ROBOTICS.jpg";
import android from "./background/android.jpg";
import datam from "./background/datam.jpg";
import iot from "./background/iot.jpg";
import devops from "./background/devops.jpg";

const Domain = () => {
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
        Domains
      </div>
      <div style={{ marginLeft: "110px" }}>
        <div style={styles.container}>
          <button>
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={artificial}
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
                src={blockchain}
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
                src={cyber}
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
                src={data}
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
                src={game}
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
                src={machine}
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
                src={web}
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
                src={robo}
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
                src={android}
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
                src={datam}
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
                src={devops}
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
                src={iot}
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

export default Domain;
