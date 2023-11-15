import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";




function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route  path="/login" element={<Login/>}/>
          <Route
             path="/"
            element={<Dashboard/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
