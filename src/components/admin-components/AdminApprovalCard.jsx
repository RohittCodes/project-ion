import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const AdminApprovalCard = () => {
  const tableFields = [
    "S. No.",
    "User id",
    "Name",
    "Branch",
    "Approve",
    "Reject",
  ];
  const studentsData = [
    {
      id: 10000002,
      name: "Dheeraj",
      branch: "CSE",
      rollno: 247,
    },
    {
      id: 10000000,
      name: "Rohith",
      branch: "CSE",
      rollno: 245,
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
    },
    {
      id: 10000001,
      name: "Rohith",
      branch: "CSE",
      rollno: 246,
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: 247,
    },
  ];
  return (
    <div className="flex flex-col h-auto w-full bg-background-components px-3 py-2 rounded-2xl border-border-secondary border-[1px]">
      <div className="flex flex-row items-center justify-between px-2 text-2xl font-bold font-mono text-gray-400">
        <div>Approval(s) Pending</div>
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
                <td className="h-8 w-24 text-center" key="Approved">
                  <button className="bg-green-700 rounded-md border-border-secondary border-[1px] px-1 py-[1px]">
                    Approve
                  </button>
                </td>
                <td className="h-8 w-24 text-center" key="Reject">
                  <button className="bg-red-500 rounded-md border-border-secondary border-[1px] px-1 py-[1px]">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminApprovalCard;
