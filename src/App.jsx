import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@babel/polyfill';

import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/admin-pages/Dashboard";
import Sidebar from "./components/Sidebar";
import PageNotFound from "./pages/PageNotFound";
import AddStudents from "./pages/admin-pages/AddStudents/index";
import StudentsData from "./pages/admin-pages/StudentsData/index";
import HomePage from "./pages/students-pages/HomePage";
import Login from "./pages/Login";
<<<<<<< HEAD
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./AuthContext";
import Ranking from "./pages/students-pages/Ranking";
import Projects from "./pages/Projects";

import AddProgramPage from "./task/AddProgramPage";
import ProjectList from "./task/ProjectList";
import Explore from "./pages/explore";
import Domain from "./pages/explore/domain";
import Technology from "./pages/explore/technology";
import AdminProfile from "./pages/admin-pages/AdminProfile";
=======
import ProfilePage from "./pages/students-pages/ProfilePage";
import { AuthProvider } from "./AuthContext";
import Ranking from "./pages/Ranking";
import Projects from "./pages/Projects";

import AddProgramPage from './task/AddProgramPage'
import ProjectList from './task/ProjectList'
import ProjectDetails from "./pages/ProjectDetails";

import ImageForm from "./task/Upload";



>>>>>>> 40a337a021670f95b2da6a2af4bbf245dee1cc95

function App() {
  return (
    <AuthProvider>
<<<<<<< HEAD
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
=======
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          {/* ADMIN ROUTES */}
          <Route exact path="/login" element={<Login />} />
          <Route path="/admin/profile/:id" element={<ProfilePage />} />
          
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/admin/register" element={<AddStudents/>}/>
          <Route path="/admin/students" element={<StudentsData/>}/>
          <Route exact path="/admin/ranking" element={<Ranking/>} />
          <Route exact path="/admin/projects" element={<Projects/>}/>
          <Route exact path="/admin/project/:id" element={<ProjectDetails/>}/>


          {/* STUDENTS ROUTES */}
          <Route path="/student" element={<HomePage/>}/>
          <Route exact path="/student/ranking" element={<Ranking/>} />
          <Route exact path="/student/projects" element={<Projects/>}/>
          <Route path="/student/" element={<HomePage/>}/>


          {/* TASK ROUTES */}
          <Route path="/task/projectlist" element={<ProjectList/>}/>
          <Route path="/task/addProject" element={<AddProgramPage/>}/>
          <Route path="/task/image" element={<ImageForm/>}/>
 
          <Route path="*" element={<PageNotFound />} />


        </Routes>
        
      </div>
    </BrowserRouter>
>>>>>>> 40a337a021670f95b2da6a2af4bbf245dee1cc95
    </AuthProvider>
  );
}

export default App;