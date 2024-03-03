import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Projt = ({ projects }) => {
  const tableFields = ["S. No.", "Project name", "Likes", "Profile"];

  const styles = {
    container: {
      margin: "10px",
      minHeight: "auto",
      backgroundColor: "#333",
      width: "60%",
      height: "auto",
      color: "#fff",
      padding: "20px",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
  };
  let auth = Cookies.get("Auth");

  return (
    <div style={styles.container}>
      <div className="text text-2xl text-gray-400 m-2">Your Project</div>
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
              <td className="h-8 w-16 text-center">{index + 1}</td>
              <td className="h-8 w-32 text-center">{data.data.Name}</td>
              <td className="h-8 w-24 text-center">{data.data.Likes.length}</td>
              <td className="h-8 w-24 text-center">
                <NavLink
                  className="btn btn-primary"
                  to={{
                    pathname: `${auth}/project/${data.data.ProjectId}`,
                    state: { data1: data.data },
                  }}
                >
                  View
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projt;
