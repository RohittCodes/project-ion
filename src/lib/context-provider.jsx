// MyContext.js
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

// Context Provider for snippets to store inside an array
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  console.log(data);

  const pushToData = (newObject) => {
    setData((prevData) => [...prevData, newObject]);
  };

  return (
    <MyContext.Provider value={{ data, pushToData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
export default MyContextProvider;
