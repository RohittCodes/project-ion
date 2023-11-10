import React from "react";
import {
  MdSpaceDashboard,
  MdSearch,
  MdExplore,
  MdPersonAdd,
  MdHelp,
  MdSupportAgent,
} from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="w-16 h-screen sticky top-0 left-0 border-border-primary border-r-[1px] text-text-primary">
      <div className="flex flex-col h-full py-4 px-auto font-semibold justify-between">
        <div className="flex flex-col gap-6">
          <div className="mx-auto rounded-md cursor-pointer">
            <MdSpaceDashboard className="text-2xl text-text-primary" />
          </div>
          <div className="mx-auto rounded-md cursor-pointer">
            <MdSearch className="text-2xl text-text-disabled" />
          </div>
          <div className="mx-auto rounded-md cursor-pointer">
            <MdExplore className="text-2xl text-text-disabled" />
          </div>
          <div className="mx-auto rounded-md cursor-pointer">
            <MdPersonAdd className="text-2xl text-text-disabled" />
          </div>
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
