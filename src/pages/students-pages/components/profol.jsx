import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Profol = ({projects}) => {
  const tableFields = ["S. No.", "Project name", "Project rank", "Profile"];
  console.log(projects)
  
  let auth = Cookies.get('Auth')
  const styles = {
    container: {
      margin: "10px",
      minHeight: "auto",
      backgroundColor: "#333",
      width: "42.5vw",
      color: "#fff",
      padding: "20px",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
  };

  return (
    <div style={styles.container}>
      <div className="text text-2xl text-gray-400 m-2">
        Following member's Project
      </div>
      <table className="table table-hover table-dark rounded-xxl">
        <thead className="table-header-group text-muted">
          <tr>
            {tableFields.map((fields) => (
              <th className="text-center h-12" key={fields}>
                {fields}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted">
          {projects.map((data, index) => (
            <tr key={index}>
              <td className="h-8 w-16 text-center" key={index + 1}>
                {index + 1}
              </td>
              <td className="h-8 w-32 text-center" key={data.data.Name}>
                {data.data.Name.slice(0,40)}
              </td>
              <td className="h-8 w-24 text-center" key={data.data.Developer}>
                {data.data.Developer}
              </td>
              <td className="h-8 w-24 text-center">
              <NavLink className="btn btn-primary" to={{pathname: `${auth}/project/${data.data.ProjectId}`,state: { data1: data.data }}}>View</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profol;
