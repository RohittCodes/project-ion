import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import MarkdownView from "react-showdown";

const CodeExplainer = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // For handling the input for code-explanation against the API
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

  // useDrop for setting the text input to drop after dragging
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
      <div className="w-full border-2 bg-gray-200 text-black border-black rounded-md p-4">
        <h2 className="text-xl font-bold">Explanation:</h2>
        {displayData !== "" && (
          <MarkdownView
            className=""
            markdown={displayData.map((line) => line + "\n").join("")}
            options={{ tables: true, emoji: true, simpleLineBreaks: true }}
          />
        )}
      </div>
    </div>
  );
};

export default CodeExplainer;
