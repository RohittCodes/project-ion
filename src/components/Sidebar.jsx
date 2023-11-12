import React from "react";
import {
  MdSpaceDashboard,
  MdSearch,
  MdExplore,
  MdPersonAdd,
  MdOutlineSyncProblem,
  MdHelp,
  MdSupportAgent,
} from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const adminNav = [
    {
      label: "Something",
      icon: MdSpaceDashboard,
      href: "/",
    },
    {
      label: "Something",
      icon: MdSearch,
      href: "/some",
    },
    {
      label: "Something",
      icon: MdExplore,
      href: "/bro",
    },
    {
      label: "Something",
      icon: MdPersonAdd,
      href: "/what",
    },
  ];

  const navItems = [
    {
      label: "Something",
      icon: MdSpaceDashboard,
      href: "/",
    },
    {
      label: "Something",
      icon: MdSearch,
      href: "/some",
    },
    {
      label: "Something",
      icon: MdOutlineSyncProblem,
      href: "/bro",
    },
    {
      label: "Something",
      icon: MdPersonAdd,
      href: "/what",
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
              to={items.href}
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
