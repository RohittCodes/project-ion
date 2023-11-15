import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import { Protected } from "./ProtectedRoute";





function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route
              path="/"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
