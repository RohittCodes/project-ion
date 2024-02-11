import React from "react";
import { NavLink } from "react-router-dom";

const ProfileProjects = () => {
  const user = [
    {
      name: "Rohith Singh",
      projects: [
        "Project1",
        "Projects2",
        "Projects3",
        "Projects4",
        "Projects5",
      ],
    },
    {
      name: "Someone",
      projects: ["Bro codes", "Project Work"],
    },
  ];
  return (
    <div className="flex sticky bg-zinc-800 h-screen border-r-[1px] border-border-secondary">
      <div className="flex flex-col w-full mx-4 my-6 gap-2">
        <div>
          <div className="mb-1 text-xl text-text-secondary font-bold">
            Project List
          </div>
          <input className="w-full h-8 p-2 rounded-md bg-background-main border-border-secondary border-[0.1rem] focus:outline-none text-text-primary" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex text-base gap-1 items-center">
            <div className="bg-black w-5 h-5 rounded-full ring-[1px] ring-slate-200" />
            <NavLink to={``} className="text-sm hover:underline">
              {user[0].name}/{user[0].projects[0]}
            </NavLink>
          </p>
          <p className="flex text-base gap-1 items-center">
            <div className="bg-black w-5 h-5 rounded-full ring-[1px] ring-slate-200" />
            <NavLink className="text-sm hover:underline">
              {user[1].name}/{user[1].projects[1]}
            </NavLink>
          </p>
          <p className="flex text-base gap-1 items-center">
            <div className="bg-black w-5 h-5 rounded-full ring-[1px] ring-slate-200" />
            <NavLink className="text-sm hover:underline">
              {user[0].name}/{user[0].projects[1]}
            </NavLink>
          </p>
          <p className="flex text-base gap-1 items-center">
            <div className="bg-black w-5 h-5 rounded-full ring-[1px] ring-slate-200" />
            <NavLink className="text-sm hover:underline">
              {user[1].name}/{user[1].projects[0]}
            </NavLink>
          </p>
          <p className="flex text-base gap-1 items-center">
            <div className="bg-black w-5 h-5 rounded-full ring-[1px] ring-slate-200" />
            <NavLink className="text-sm hover:underline">
              {user[0].name}/{user[0].projects[4]}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileProjects;
