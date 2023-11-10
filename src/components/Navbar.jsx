import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Students", href: "/students" },
    { name: "Problems", href: "/problems" },
    { name: "Projects", href: "/projects" },
    { name: "Register", href: "/student-registration" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-background-main border-border-primary border-b-[1px] text-text-primary">
      <div className="w-full px-2 sm:px-4 lg:px-4">
        <div className="h-16 relative flex items-center justify-between">
          <div className="font-bold text-xl">ProjectIon</div>
          {/*<div className="hidden md:ml-6 md:mr-6 md:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-text-primary rounded-md px-3 py-2 text-sm font-medium"
                      : "text-text-disabled hover:text-text-primary rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
                </div>*/}

          {/* Need to change this  after authentication*/}
          <div className="flex flex-row items-center justify-end gap-4">
            <div>
              <IoMdNotificationsOutline className="text-2xl" />
            </div>
            <div onClick={toggleDropdown}>
              <div className="w-8 h-8 rounded-full border-border-primary border-[1px] bg-background-main cursor-pointer"></div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 top-[48px] mt-2 mr-2 w-60 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="block w-full px-2 py-1 text-sm">
                <li className="bg-gray-200 px-2 py-1">Something</li>
              </div>
              <li>
                <a
                  href="/some"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="/some1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="/some2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
