import React from "react";

const AdminApprovalCard = () => {
  return (
    <div className="w-full h-80 bg-background-components rounded-2xl border-border-secondary border-[1px] text-text-primary">
      <div className="flex flex-col py-4 px-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-lg font-semibold">Projects</h1>
          <div className="bg-background-main px-2 py-1 rounded-md text-text-disabled cursor-pointer">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminApprovalCard;
