import React from "react";
import { NavLink } from "react-router-dom";

import artificial from "./background/ARTIFICIAL.jpg";
import blockchain from "./background/BLOCKCHAIN.jpg";
import cyber from "./background/CYBER.jpg";
import SEE from "./background/SEE MORE.jpg";
import react from "./background/REACT.jpg";
import angular from "./background/ANGULAR.jpg";
import vue from "./background/vue.jpg";
import SEEM from "./background/SEE.jpg";
import data from "./background/data.jpg";
import game from "./background/GAME.jpg";
import node from "./background/NODE.jpg";
import python from "./background/PYTHON.jpg";

const styles = {
  container: {
    margin: "20px",
    height: "100%",
    width: "22em",
    display: "inline-block",
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
    objectFit: "cover",
  },
};

const Explore = () => {
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

        <div style={styles.container}>
          <NavLink to={`/admin/explore/domain`} className="btn btn-primary">
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={SEEM}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </NavLink>
        </div>
        {/*..................................................................................................... */}
      </div>

      <div
        style={styles.title}
        className="text-5xl font-bold font-mono text-gray-400"
      >
        Technologies
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
          {/* Use NavLink from react-router-dom */}
          <NavLink to={`/admin/explore/technology`} className="btn btn-primary">
            <div className="card bg-dark text-white" style={styles.card}>
              <img
                className="card-img"
                src={SEE}
                alt="Card image"
                style={styles.img}
              />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Explore;
