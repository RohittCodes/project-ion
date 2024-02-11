import React from "react";
import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState("");

  function handleChange(e) {
    if (e.target.files.length === 0) {
      setFile(null);
    } else {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }
  return (
    <div className="flex-col ml-2">
      <label
        for="file-input"
        className="cursor-pointer w-full h-8 rounded-md bg-indigo-600 text-center text-lg font-medium"
      >
        <input
          type="file"
          id="file-input"
          onChange={handleChange}
          className="hidden"
        />
        UPLOAD
      </label>
      {file ? (
        <img
          src={file}
          alt={file}
          className="w-36 object-fill h-[156px] rounded-md"
        />
      ) : (
        <div className="w-36 h-[156px] rounded-md bg-black" />
      )}
    </div>
  );
};

export default FileUpload;
