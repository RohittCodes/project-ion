import React from "react";
import { AiOutlineHome, AiOutlineRise } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";

const AdminCards = () => {
  return (
    <div className="flex flex-row text-text-primary gap-6">
      <div className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[1px]">
        <div className="text-2xl rounded-full bg-blue-400 p-2">
          <AiOutlineHome />
        </div>
        <div className="flex flex-col w-full gap-1">
          <div className="text-gray-400 font-semibold">Total Projects</div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold font-mono">25,237</div>
            <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
              <AiOutlineRise />
              12
            </div>
          </div>
        </div>
      </div>

      {/* .................................................................................................... */}

      <div className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[1px]">
        <div className="text-2xl rounded-full bg-orange-400 p-2">
          <IoPersonOutline />
        </div>
        <div className="flex flex-col w-full gap-1">
          <div className="text-gray-400 font-semibold">Total Students</div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold font-mono">237</div>
            <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
              <AiOutlineRise />2
            </div>
          </div>
        </div>
      </div>

      {/* ........................................................................................................ */}

      <div className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[1px]">
        <div className="text-2xl rounded-full bg-indigo-500 p-2">
          <BiBuildings />
        </div>
        <div className="flex flex-col w-full gap-1">
          <div className="text-gray-400 font-semibold">Departments</div>
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium font-mono">4-CSE,CSM,..</div>
          </div>
        </div>
      </div>

{/* ....................................................................................................................... */}

      <div className="flex flex-row gap-4 w-full items-center h-28 bg-background-components px-4 py-2 border-rounded rounded-2xl border-border-secondary border-[1px]">
        <div className="text-2xl rounded-full bg-green-700 p-2">
          <BsCheck2Circle />
        </div>
        <div className="flex flex-col w-full gap-1">
          <div className="text-gray-400 font-semibold">Approval(s) pending</div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold font-mono">6</div>
            <div className="text-green-700 inline-flex text-sm items-center bg-background-main rounded-md px-1">
              <AiOutlineRise />4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCards;
