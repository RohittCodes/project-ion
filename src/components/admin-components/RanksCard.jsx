import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const RanksCard = () => {
  const tableFields = ["User id", "Name", "Branch", "Profile"];
  const studentsData = [
    {
      id: 10000001,
      name: "Rohith",
      branch: "CSE",
      rollno: 245,
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 246,
    },
    {
      id: 10000003,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
    },
    {
      id: 10000004,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
    },
  ];
  return (
    <div className="flex flex-col h-auto w-full bg-background-components px-3 py-2 rounded-2xl border-border-secondary border-[1px]">
      <div className="flex flex-row items-center justify-between px-2 text-2xl font-bold font-mono text-gray-400">
        <div>Rankboard</div>
        <IoArrowForwardCircleOutline className="cursor-pointer" />
      </div>
      <div className="w-full px-2">
        <table className="w-full border-separate">
          <thead className="table-header-group text-text-secondary">
            <tr>
              {tableFields.map((fields) => (
                <th className="text-center h-12" key={fields}>
                  {fields}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-center text-text-disabled">
            {studentsData.map((data, index) => (
              <tr key={index}>
                <td className="h-8" key={data.rollno}>
                  {data.rollno}
                </td>
                <td className="h-8" key={data.name}>
                  {data.name}
                </td>
                <td className="h-8" key={data.branch}>
                  {data.branch}
                </td>
                <td className="h-8" key={data.id}>
                  <NavLink to={"/profile/" + data.id}>{data.id}</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RanksCard;
