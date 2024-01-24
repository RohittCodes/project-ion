import { useState } from "react";
import { useDrop } from "react-dnd";

const CodeExplainer = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleProcessData = async () => {
    try {
      const response = await fetch("http://localhost:3001/code-explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      setOutput(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const displayData = output.split("\n");

  const [, drop] = useDrop({
    accept: "SNIPPET_ITEM",
    drop: (item) => setInput(item.code),
  });

  return (
    <div className="flex flex-col justify-center items-center mx-4 pb-4 gap-4">
      <div className="w-full">
        <h1>Code Explanation</h1>
      </div>
      <textarea
        ref={drop}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-[32rem] overflow-auto w-full p-4 border-2 text-black border-black rounded-md resize-none"
      />
      <button
        onClick={handleProcessData}
        className="bg-indigo-500 rounded-md h-8 w-[10%]"
      >
        Click me
      </button>
      {displayData !== "" && (
        <div className="">
          {displayData.map((data, index) => (
            <div key={index}>{data}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CodeExplainer;
