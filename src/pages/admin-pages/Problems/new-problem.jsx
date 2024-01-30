import React from "react";

const NewProblem = () => {
  return (
    <div className="text-white w-full px-4 py-4">
      <div className="h-full w-full">
        <div className="flex flex-col h-full w-full border-2 rounded-md">
          <div className="w-full px-4">
            <h2>Title</h2>
            <input type="text" className="w-full" />
          </div>
          <div className="w-full px-4">
            <h2>Description</h2>
            <input type="text" className="w-full" />
          </div>
          <div className="w-full px-4">
            <h2>Category</h2>
            <input type="text" className="w-full" />
          </div>
          <div className="w-full px-4">
            <h2>Domain</h2>
            <input type="text" className="w-full" />
          </div>
          <div className="w-full px-4">
            <h2>References</h2>
            <input type="text" className="w-full" />
          </div>
          <div className="flex justify-center">Add</div>
        </div>
      </div>
    </div>
  );
};

export default NewProblem;
