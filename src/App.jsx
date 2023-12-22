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
import ProfilePage from "./pages/students-pages/ProfilePage";
import { AuthProvider } from "./AuthContext";
import Ranking from "./pages/Ranking";
import Projects from "./pages/Projects";

import AddProgramPage from "./task/AddProgramPage";
import ProjectList from "./task/ProjectList";
import Explore from "./pages/explore";
import Domain from "./pages/explore/domain";
import Technology from "./pages/explore/technology";
import AdminProfile from "./pages/admin-pages/AdminProfile";

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
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/register" element={<AddStudents />} />
            <Route path="/admin/students" element={<StudentsData />} />

            {/* STUDENTS ROUTES */}
            <Route path="/student" element={<HomePage />} />
            <Route exact path="/student/ranking" element={<Ranking />} />
            <Route exact path="/student/projects" element={<Projects />} />

            {/* TASK ROUTES */}
            <Route path="/task/projectlist" element={<ProjectList />} />
            <Route path="/task/addProject" element={<AddProgramPage />} />

            <Route path="*" element={<PageNotFound />} />
            <Route path="/admin/explore" element={<Explore />} />
            <Route path="/admin/explore/domain" element={<Domain />} />
            <Route path="/admin/explore/technology" />
            <Route path="/admin/profile" element={<AdminProfile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
