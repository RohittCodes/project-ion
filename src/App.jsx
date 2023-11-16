import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import { Protected } from "./ProtectedRoute";





import PageNotFound from "./pages/PageNotFound";
import AddStudents from "./pages/AddStudents/index";
import StudentsData from "./pages/StudentsData.jsx";


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route
              path="/admin"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="/"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/register" element={<AddStudents />} />
          <Route path="/admin/students" element={<StudentsData />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
