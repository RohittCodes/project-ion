import React from "react";
import Cookies from "js-cookie";
import { useAuth } from "../../../AuthContext";
import Graphw from "../components/graphw";
import Profilew from "../components/profilew";
import Studentr from "../components/studentr";
import Projt from "../components/projt";
import Profol from "../components/profol";
const HomePage = () => {
  let { auth } = useAuth();
  const user = Cookies.get("User");
  return (
    <div>
      <div
        style={{ width: "100%", padding: "25px", position: "relative" }}
        className="flex text-text-primary"
      >
        <div>
          <Profilew />
        </div>
        <div>
          <div>
            <div style={{ display: "flex" }}>
              <Studentr />
              <Graphw />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "25px" }}>
        <Projt />
        <Profol/>
      </div>
    </div>
  );
};

export default HomePage;
