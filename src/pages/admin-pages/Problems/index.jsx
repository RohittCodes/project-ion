import React from "react";
import { Link } from "react-router-dom";

const Problems = () => {
  return (
    <div className="text-white w-full px-4 py-4">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex justify-end">
          <Link to="/admin/problems/add">
            <button className="bg-indigo-800 rounded-md px-2 py-1 shadow-md">
              Add new
            </button>
          </Link>
        </div>
        <div className="h-full w-full bg-black"></div>
      </div>
    </div>
  );
};

export default Problems;
