import React, { useState } from "react";

const CodeCard = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full px-1 py-2 text-xl rounded-sm ring-1 ring-black font-mono">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="truncate">{props.title}</p>
          <button onClick={() => setToggle(!toggle)}>Open</button>
        </div>
        {toggle && <div className="px-2 py-2">{props.code}</div>}
      </div>
    </div>
  );
};

export default CodeCard;
