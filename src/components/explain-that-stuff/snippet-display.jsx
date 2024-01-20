import React, { useState } from "react";
import { useDrag } from "react-dnd";

const SnippetDisplay = ({ title, code, by }) => {
  const [toggle, setToggle] = useState(false);

  const [, drag] = useDrag({
    type: "SNIPPET_ITEM",
    item: { code },
  });

  const createMarkup = () => {
    return { __html: code };
  };

  return (
    <div
      ref={drag}
      className="flex w-full border-2 rounded-md px-2 py-2 cursor-move"
    >
      <div className="w-full flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-xl">{title}</p>
          <div className="flex gap-2">
            By: {by}
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? "Close" : "Open"}
            </button>
          </div>
        </div>
        {toggle && (
          <div
            dangerouslySetInnerHTML={createMarkup()}
            style={{ whiteSpace: "pre-wrap" }}
          />
        )}
      </div>
    </div>
  );
};

export default SnippetDisplay;
