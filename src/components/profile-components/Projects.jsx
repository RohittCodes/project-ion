import React from "react";
import { NavLink } from "react-router-dom";

const ProjectTable = () => {
  const tableFields = ["S. No.", "Project name", "Project rank", "Profile"];
  const ProjectTable = [
    {
      name: "project management",
      rank: "1,27,326",
    },
    {
      name: "project management",
      rank: "1,27,326",
    },
    {
      name: "project management",
      rank: "1,27,326",
    },
    {
      name: "project management",
      rank: "1,27,326",
    },
    {
      name: "project management",
      rank: "1,27,326",
    },
    {
      name: "project management",
      rank: "1,27,326",
    },
    {
      name: "project management",
      rank: "1,27,326",
    },
  ];
  const styles = {
    container: {
      margin: "10px",
      minHeight: "auto",
      backgroundColor: "#333",
      width: "66.6vw",
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
          {ProjectTable.map((data, index) => (
            <tr key={index}>
              <td className="h-8 w-16 text-center" key={index + 1}>
                {index + 1}
              </td>
              <td className="h-8 w-32 text-center" key={data.name}>
                {data.name}
              </td>
              <td className="h-8 w-24 text-center" key={data.rank}>
                {data.rank}
              </td>
              <td className="h-8 w-24 text-center">
                <NavLink to="" className="btn btn-primary">
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

export default ProjectTable;
