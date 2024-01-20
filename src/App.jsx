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
import Following from './pages/students-pages/Following'

import AddProgramPage from "./task/AddProgramPage";
import ProjectList from "./task/ProjectList";
import Explore from "./pages/explore";
import Domain from "./pages/explore/domain";
import Technology from "./pages/explore/technology";
import AdminProfile from "./pages/admin-pages/AdminProfile";
import ProjectDetails from "./pages/ProjectDetails";
import ProtectedRoute from "./ProtectedRoute";
import Password from "./pages/Password";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            {/* ADMIN ROUTES */}
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/admin/resetpassword" element={<Password/>}/>
            <Route path="/admin/profile/:id" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
            <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/register" element={<ProtectedRoute><AddStudents/></ProtectedRoute>} />
            <Route path="/admin/students" element={<ProtectedRoute><StudentsData/></ProtectedRoute>} />
            <Route exact path="/admin/project/:id" element={<ProtectedRoute><ProjectDetails/></ProtectedRoute>}/>
            <Route exact path="/admin/ranking" element={<ProtectedRoute><Ranking/></ProtectedRoute>} />
            <Route exact path="/admin/projects" element={<ProtectedRoute><Projects/></ProtectedRoute>} />
          


            {/* STUDENTS ROUTES */}
            <Route exact path="/student/resetpassword" element={<Password/>}/>
            <Route path="/student" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
            <Route exact path="/student/project/:id" element={<ProtectedRoute><ProjectDetails/></ProtectedRoute>}/>
            <Route exact path="/student/ranking" element={<ProtectedRoute><Ranking/></ProtectedRoute>} />
            <Route exact path="/student/projects" element={<ProtectedRoute><Projects/></ProtectedRoute>} />
            <Route exact path="/student/following" element={<Following/>}/>
            <Route path="/student/profile/:id" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
            <Route exact path="/students" component={<StudentsData/>} />

            {/* TASK ROUTES */}
            <Route path="/task/projectlist" element={<ProjectList />} />
            <Route path="/task/addProject" element={<AddProgramPage />} />
            
            <Route path="*" element={<PageNotFound />} />
            <Route path="/admin/explore" element={<ProtectedRoute><Explore/></ProtectedRoute>} />
            <Route path="/admin/explore/domain" element={<ProtectedRoute><Domain/></ProtectedRoute>} />
            <Route path="/admin/explore/technology" />
            <Route path="/admin/profile" element={<ProtectedRoute><AdminProfile/></ProtectedRoute>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
