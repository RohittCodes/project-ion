import React from "react";
import { NavLink } from "react-router-dom";

const StudentsData = () => {
  const tableFields = [
    "S. No.",
    "User id",
    "Full Name",
    "Branch",
    "Section",
    "Roll no",
    "Profile",
  ];
  const studentsData = [
    {
      id: 10000000,
      name: "Rohith",
      branch: "CSE",
      rollno: 245,
      section: "A",
    },
    {
      id: 10000001,
      name: "Rohith",
      branch: "CSE",
      rollno: 246,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "A",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "B",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "D",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
      section: "C",
    },
  ];

  return (
    <div className="flex flex-col w-full text-text-primary gap-2 mx-4 my-2">
      <input
        type="text"
        className="w-80 h-10 rounded-md bg-background-components focus:outline-none p-2"
      />
      <div className="rounded-lg bg-background-components h-full w-full">
        <table className="w-full border-separate">
          <thead className="table-header-group text-text-disabled">
            <tr>
              {tableFields.map((fields) => (
                <th className="text-center h-12" key={fields}>
                  {fields}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-text-disabled">
            {studentsData.map((data, index) => (
              <tr key={index}>
                <td className="h-8 w-16 text-center" key={index + 1}>
                  {index + 1}
                </td>
                <td className="h-8 w-40 text-center" key={data.id}>
                  {data.id}
                </td>
                <td className="text-center" key={data.name}>
                  {data.name}
                </td>
                <td className="h-8 w-32 text-center" key={data.branch}>
                  {data.branch}
                </td>
                <td className="h-8 w-24 text-center" key={data.section}>
                  {data.section}
                </td>
                <td className="h-8 w-24 text-center" key={data.rollno}>
                  {data.rollno}
                </td>
                <td className="h-8 w-24 text-center">
                  <NavLink to={"/profile/" + data.id}>Profile</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsData;
