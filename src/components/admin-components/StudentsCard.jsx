import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const StudentsCard = (props) => {
  const tableFields = [
    "S. No.",
    "User id",
    "Name",
    "Branch",
    "Section",
    "Roll no",
    "Profile",
  ];
  let studentsData = props.students
  console.log(props.students)
  return (
    <div className="flex flex-col h-auto w-full bg-background-components px-3 py-2 rounded-2xl border-border-secondary border-[1px]">
      <div className="flex flex-row items-center justify-between px-2 text-2xl font-bold font-mono text-gray-400">
        <div>Students Data</div>
        <NavLink to={'/admin/students'}><IoArrowForwardCircleOutline className="cursor-pointer" /></NavLink>
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
                <td className="h-8 w-40 text-center" key={data.StudentProfileId}>
                  {data.StudentProfileId}
                </td>
                <td className="text-center" key={data.StudentName}>
                  {data.StudentName}
                </td>
                <td className="h-8 w-32 text-center" key={data.StudentBranch}>
                  {data.StudentBranch}
                </td>
                <td className="h-8 w-24 text-center" key={data.StudentSection}>
                  {data.StudentSection}
                </td>
                <td className="h-8 w-24 text-center" key={data.StudentId}>
                  {data.StudentId}
                </td>
                <td className="h-8 w-24 text-center">
                  <NavLink to={`/profile/${data.id}`}>Profile</NavLink>
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
