import React from "react";

const AddStudents = () => {
  return (
    <div className="h-[calc(100vh-64px)] w-full flex justify-center items-center text-text-secondary">
      <div className="mx-auto bg-background-components p-4 rounded-md">
        <h1 className="text-center text-lg font-bold m-2">
          Student Registrations
        </h1>
        <form className="">
          <div className="flex flex-col justify-between space-y-2">
            <div className="flex-row space-x-4">
              <input
                type="text"
                className="text-md font-semibold rounded-md h-8 px-2 focus:outline-none"
                placeholder="First Name"
              />
              <input
                type="text"
                className="text-md font-semibold rounded-md h-8 px-2 focus:outline-none"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              className="text-md font-semibold rounded-md h-8 px-2 focus:outline-none"
              placeholder="Email address"
            />
            <input
              type="text"
              className="text-md font-semibold rounded-md h-8 px-2 focus:outline-none"
              placeholder="Unique ID (Roll number)"
            />
            <button
              onClick={() => {}}
              type="button"
              className="bg-gray-300 h-8 rounded-md"
              children="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudents;
