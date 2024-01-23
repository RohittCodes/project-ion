import React from "react";
import { NavLink } from "react-router-dom";

const SearchResultsList = () => {
  let data = [
    {name:'AdminDashboard',path:'/admin'}
  ]
  return (
    <div className="flex flex-col max-h-[5rem] rounded-md w-full bg-background-components overflow-y-scroll">
      {results.map((result, id) => (
        <NavLink to="/some" key={id} className="cursor-pointer">
          {result.name}
        </NavLink>
      ))}
    </div>
  );
};

export default SearchResultsList;
