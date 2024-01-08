import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const RanksCard = (props) => {
  const tableFields = ["User id", "Name", "Branch", "Profile"];
  console.log(props.students)
  let studentsData = props.students
  console.log(studentsData)
  studentsData.sort((a,b) =>b.likes - a.likes)
  studentsData = studentsData.slice(0,5)
  let path = location.pathname.startsWith("/admin")

  return (
    <div className="flex flex-col h-auto w-full bg-background-components px-3 py-2 rounded-2xl border-border-secondary border-[1px]">
      <div className="flex flex-row items-center justify-between px-2 text-2xl font-bold font-mono text-gray-400">
        <div>Rankboard</div>
        <NavLink to={'/admin/ranking'}><IoArrowForwardCircleOutline className="cursor-pointer" /></NavLink>
        
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
                <td className="h-8" key={data.StudentId}>
                  {data.StudentId}
                </td>
                <td className="h-8" key={data.StudentName}>
                  {data.StudentName}
                </td>
                <td className="h-8" key={data.StudentBranch}>
                  {data.StudentBranch}
                </td>
                <td className="h-8" key={data.StudentProfileId}>
                  <NavLink to={"/profile/" + data.StudentProfileId}>Profile</NavLink>
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
