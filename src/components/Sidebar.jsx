import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import {
  MdSpaceDashboard,
  MdSearch,
  MdExplore,
  MdPersonAdd,
  MdOutlineSyncProblem,
  MdHelp,
  MdSupportAgent,
  MdOutlineHelpCenter,
  MdHelpCenter,
} from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { FaRankingStar } from "react-icons/fa6";

const Sidebar = () => {
  const adminNav = [
    {
      label: "Something",
      icon: MdSpaceDashboard,
      href: "/",
    },
    {
      label: "Something1",
      icon: IoPersonOutline,
      href: "/students",
    },
    {
      label: "Something2",
      icon: MdExplore,
      href: "/bro",
    },
    {
      label: "Something3",
      icon: MdPersonAdd,
      href: "/register",
    },
    {
      label: "Project",
      icon: AiOutlineFundProjectionScreen,
      href: "/projects",
    },
    {
      label: "Ranking",
      icon: FaRankingStar,
      href: "/ranking",
    },
  ];

  const navItems = [
    {
      label: "Something",
      icon: MdSpaceDashboard,
      href: "/",
    },

    {
      label: "Project",
      icon: AiOutlineFundProjectionScreen,
      href: "/projects",
    },
    {
      label: "Ranking",
      icon: FaRankingStar,
      href: "/ranking",
    },
  ];

  const location = useLocation();

  if (location.pathname.startsWith("/admin")) {
    return (
      <div className="w-16 h-screen sticky top-0 left-0 border-border-primary border-r-[1px] text-text-primary">
        <div className="flex flex-col h-full py-4 font-semibold justify-between">
          <div className="flex flex-col items-center justify-center gap-6 mx-4">
            {adminNav.map((items) => (
              <NavLink
                key={items.label}
                to={"/admin" + items.href}
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-center rounded-md cursor-pointer items-center w-8 h-8 bg-background-components"
                    : "flex rounded-md justify-center cursor-pointer items-center w-8 h-8 bg-transparent"
                }
              >
                <items.icon className="text-2xl text-text-primary" />
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="mx-auto rounded-md cursor-pointer">
              <MdHelp className="text-2xl text-text-disabled" />
            </div>
            <div className="mx-auto rounded-md cursor-pointer">
              <MdSupportAgent className="text-2xl text-text-disabled" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-16 h-screen sticky top-0 left-0 border-border-primary border-r-[1px] text-text-primary">
      <div className="flex flex-col h-full py-4 font-semibold justify-between">
        <div className="flex flex-col items-center justify-center gap-6 mx-4">
          {navItems.map((items) => (
            <NavLink
              key={items.label}
              to={"/student" + items.href}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center rounded-md cursor-pointer items-center w-8 h-8 bg-background-components"
                  : "flex rounded-md justify-center cursor-pointer items-center w-8 h-8 bg-transparent"
              }
            >
              <items.icon className="text-2xl text-text-primary" />
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className="mx-auto rounded-md cursor-pointer">
            <MdHelp className="text-2xl text-text-disabled" />
          </div>
          <div className="mx-auto rounded-md cursor-pointer">
            <MdSupportAgent className="text-2xl text-text-disabled" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
