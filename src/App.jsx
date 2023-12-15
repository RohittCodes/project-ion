import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@babel/polyfill";

import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/admin-pages/Dashboard";
import Sidebar from "./components/Sidebar";
import PageNotFound from "./pages/PageNotFound";
import AddStudents from "./pages/admin-pages/AddStudents/index";
import StudentsData from "./pages/admin-pages/StudentsData/index";
import HomePage from "./pages/students-pages/HomePage";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            {/* ADMIN ROUTES */}
            <Route exact path="/login" element={<Login />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route
              path="/"
              element={
                <Protected>
                  <HomePage />
                </Protected>
              }
            />
            <Route
              path="/admin"
              element={
                <Protected>
                  <AdminDashboard />
                </Protected>
              }
            />
            <Route
              path="/admin/register"
              element={
                <Protected>
                  <AddStudents />
                </Protected>
              }
            />
            <Route
              path="/admin/students"
              element={
                <Protected>
                  <StudentsData />
                </Protected>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
