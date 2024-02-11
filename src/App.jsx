import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@babel/polyfill";

import ProtectedRoute from "./protected-route";
import { AuthProvider } from "./auth-context";

import AdminDashboard from "./pages/admin-pages/dashboard";
import AddStudents from "./pages/admin-pages/add-students/index";
import AdminProfile from "./pages/admin-pages/admin-profile";
import StudentsData from "./pages/admin-pages/students-data/index";
import Problems from "./pages/admin-pages/problems";
import NewProblem from "./pages/admin-pages/problems/new-problem";
import ProblemStatement from "./pages/admin-pages/project-statement";

import PageNotFound from "./pages/page-not-found";
import Login from "./pages/login";
import ProfilePage from "./pages/students-pages/profile-page";
import HomePage from "./pages/students-pages/home-page";
import Following from "./pages/students-pages/following";
import SnippetAdder from "./pages/explain-that-stuff/snippet-adder";
import SnippetsSearch from "./pages/explain-that-stuff/snippets-search";

import Explore from "./pages/explore";
import Domain from "./pages/explore/domain";
import ProjectDetails from "./pages/project-details";
import Ranking from "./pages/ranking";
import Projects from "./pages/projects";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Password from "./pages/password";

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
            <Route exact path="/admin/resetpassword" element={<Password />} />
            <Route
              path="/admin/profile/:id"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/problems"
              element={
                <ProtectedRoute>
                  <Problems />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/problems/add"
              element={
                <ProtectedRoute>
                  <NewProblem />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/register"
              element={
                <ProtectedRoute>
                  <AddStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/students"
              element={
                <ProtectedRoute>
                  <StudentsData />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/admin/project/:id"
              element={
                <ProtectedRoute>
                  <ProjectDetails />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/admin/ranking"
              element={
                <ProtectedRoute>
                  <Ranking />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/admin/projects"
              element={
                <ProtectedRoute>
                  <Projects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/problemstatement"
              element={
                <ProtectedRoute>
                  <ProblemStatement />
                </ProtectedRoute>
              }
            />

            {/* STUDENTS ROUTES */}
            <Route exact path="/student/resetpassword" element={<Password />} />
            <Route
              path="/student"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/student/project/:id"
              element={
                <ProtectedRoute>
                  <ProjectDetails />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/student/profile/:id"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/student/ranking"
              element={
                <ProtectedRoute>
                  <Ranking />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/student/projects"
              element={
                <ProtectedRoute>
                  <Projects />
                </ProtectedRoute>
              }
            />
            <Route exact path="/student/following" element={<Following />} />

            <Route
              path="/student/explain/add"
              element={
                <ProtectedRoute>
                  <SnippetAdder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/explain/snippets"
              element={
                <ProtectedRoute>
                  <SnippetsSearch />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/admin/explore"
              element={
                <ProtectedRoute>
                  <Explore />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/explore/domain"
              element={
                <ProtectedRoute>
                  <Domain />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/profile"
              element={
                <ProtectedRoute>
                  <AdminProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/problem-statement"
              element={
                <ProtectedRoute>
                  <ProblemStatement />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
