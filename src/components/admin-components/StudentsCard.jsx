import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const StudentsCard = () => {
  const tableFields = [
    "S. No.",
    "User id",
    "Name",
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
  ];
  return (
    <div className="flex flex-col h-auto w-full bg-background-components px-3 py-2 rounded-2xl border-border-secondary border-[1px]">
      <div className="flex flex-row items-center justify-between px-2 text-2xl font-bold font-mono text-gray-400">
        <div>Students Data</div>
        <IoArrowForwardCircleOutline className="cursor-pointer" />
      </div>
      <div className="w-full">
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

export default StudentsCard;
