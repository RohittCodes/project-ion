import React from "react";
import { NavLink } from "react-router-dom";

const Table = () => {
  const tableFields = [
    "SNo",
    "Sid",
    "Student name",
    "Year",
    "Branch",
    "Profile",
  ];

  const styles = {
    container: {
      width: "875px",
      // Adjust as needed
      margin: "10px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#333",

      color: "#fff",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
  };

  const studentsData = [
    {
      id: 10000000,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000001,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
    {
      id: 10000002,
      name: "Rohith",
      year: "2 year",
      branch: "CSE",
    },
  ];

  return (
    <div className="flex flex-col w-full text-light gap-2 mx-4 my-2">
      <div style={styles.container}>
        <input
          type="text"
          className="form-control form-control-dark w-80 rounded-md p-2 ms-auto"
          placeholder="Search..."
        />
        <div
          className="rounded-lg bg-dark max-h-full w-full"
          style={{ height: "500px", overflowY: "scroll" }}
        >
          <table className="table table-bordered table-hover table-dark rounded-xxl">
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
              {studentsData.map((data, index) => (
                <tr key={index}>
                  <td className="h-8 w-16 text-center" key={index + 1}>
                    {index + 1}
                  </td>
                  <td className="text-center" key={data.id}>
                    {data.id}
                  </td>
                  <td className="text-center" key={data.name}>
                    {data.name}
                  </td>
                  <td className="text-center" key={data.year}>
                    {data.year}
                  </td>
                  <td className="text-center" key={data.branch}>
                    {data.branch}
                  </td>
                  <td className="h-8 w-30 text-center">
                    <NavLink
                      to={`/profile/${data.id}`}
                      className="btn btn-primary"
                    >
                      Profile
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
