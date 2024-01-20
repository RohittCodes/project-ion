import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Projt = ({ projects }) => {
  const tableFields = ["S. No.", "Project name", "Likes", "Profile"];

  const styles = {
    container: {
      margin: "10px",
      minHeight: "auto",
      backgroundColor: "#1f2d37",
      width: "60%",
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
      <div className="text text-2xl bg-[#1f2d37] w-full rounded-t-md px-2 py-1 text-white">
        Your Project
      </div>
      <table className="text-white w-full bg-[#1f2d37] rounded-b-md py-1">
        <thead className="">
          <tr>
            {tableFields.map((fields) => (
              <th className="text-center h-12" key={fields}>
                {fields}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {projects.map((data, index) => (
            <tr key={data.data.StudentProfileId} className="py-2">
              <td className="h-8 w-16 text-center" key={index + 1}>
                {index + 1}
              </td>
              <td className="h-8 w-32 text-center" key={data.data.Name}>
                {data.data.Name}
              </td>
              <td className="h-8 w-24 text-center" key={data.data.Likes.length}>
                {data.data.Likes.length}
              </td>
              <td className="h-12 w-24 text-center">
                <NavLink
                  className="w-fit h-fit bg-blue-900 px-4 py-2 rounded-xl"
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
