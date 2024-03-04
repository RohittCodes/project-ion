import { useState } from "react";
import { useMyContext } from "../../lib/context-provider";

const Codebox = () => {
  // pushing data(snippets) to our context array
  const { pushToData } = useMyContext();
  const [inputValue, setInputValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [writtenBy, setWrittenBy] = useState("");

  const handleAddData = () => {
    if (inputValue === "") {
      return;
    }

    const newData = { key: inputValue, title: titleValue, by: writtenBy };
    pushToData(newData);
    setInputValue("");
  };

  return (
    <div className="w-full flex flex-col h-screen gap-2 items-end">
      <input
        type="text"
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        className="w-full h-[56px] rounded-md bg-gray-200 ring-black ring-1 focus:outline-none p-2"
        placeholder="What it does..??"
      />
      <textarea
        name=""
        id=""
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Enter your code snippet..."
        className="w-full h-full rounded-md bg-gray-200 ring-black ring-1 focus:outline-none resize-none p-2 font-mono"
      />
      <input
        type="text"
        onChange={(e) => {
          setWrittenBy(e.target.value);
        }}
        placeholder="Written by??"
        className="w-full h-[36px] rounded-md bg-gray-200 ring-black ring-1 focus:outline-none px-2"
      />
      <button
        onClick={handleAddData}
        className="w-fit bg-indigo-500 px-2 py-2 rounded-md shadow-md text-xl"
      >
        Add Snippet
      </button>
    </div>
  );
};

export default Codebox;
