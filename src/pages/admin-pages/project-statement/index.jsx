import React, { useState } from "react";
import Select from "react-select";

const ProblemStatement = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [numberInput, setNumberInput] = useState(0);

  const options = [
    { value: "mern", label: "mern" },
    { value: "ai", label: "ai" },
    { value: "ml", label: "ml" },
    { value: "iot", label: "iot" },
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberInput(isNaN(value) ? 0 : value);
  };

  return (
    <div className="flex flex-col w-full text-light gap-2 mx-5 my-5">
      <div
        style={{ height: "40rem" }}
        className="rounded-lg bg-dark overflow-hidden p-2 w-full border-white"
      >
        <div className="text text-gray-400 text-4xl text-center">
          Add Problem Statement
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            style={{ marginTop: "50px", marginBottom: "2px" }}
            className="text-m text-gray-400"
          >
            enter your problem discription
          </label>
          <div style={{ width: "75em", margin: "1rem" }} className="form-group">
            <textarea
              placeholder="Enter your description here.."
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ color: "black", width: "200px", marginRight: "20px" }}>
            <Select
              placeholder="select mupltiple"
              options={options}
              isMulti
              onChange={handleChange}
              value={selectedOptions}
            />
          </div>
          <div style={{ margin: "1rem" }}>
            <label htmlFor="numberInput">NO. groups on this problem: </label>
            <input
              style={{ marginLeft: "0.2rem", color: "black", padding: "1px" }}
              type="number"
              id="numberInput"
              name="numberInput"
              value={numberInput}
              onChange={handleNumberChange}
              min="0" // Set the minimum value
              max="5" // Set the maximum value
              step="1" // Set the step size
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProblemStatement;

