import React from "react";
import ProfileProjects from "../../components/ProfileProjects";
import HomeSection from "../../components/HomeSection";

const index = () => {
  return (
    <div className="flex flex-row w-full text-text-secondary">
      <div className="w-72">
        <ProfileProjects />
      </div>
      <div className="w-full h-full flex flex-col px-4 py-2">
        <HomeSection />
      </div>
    </div>
  );
};

export default index;
