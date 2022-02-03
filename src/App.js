import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/app.scss';
import {
  Error,
  Home,
  News,
  Department,
  Faculty,
  NewsDetail,
  Register,
  Signup,
  Signin,
  UniversityInfo,
  FormRegistrationUniPage,
  FormRegistrationFacultyPage,
  FormRegistrationBackgroundPage,
  SendToken
} from './pages';
import {
  DashboardPage
} from './dashboard/pages';
import {Navbar, Footer, Sidebar, AuthWrapper} from './components';
import {
  DashboardLayout,
  FacultyPage,
  DepartmentPage,
  PostPage,
  CheckRegistrationPage
} from './dashboard/pages';
import {ActionContextProvider} from './dashboard/contexts/actionContext';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthWrapper>
      <Router>
          <ToastContainer position="top-center" />
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={
              <ActionContextProvider>
                <DashboardLayout />
              </ActionContextProvider>

            }>
              <Route index element={<DashboardPage />} />
              <Route path="faculty" element={<FacultyPage />} />
              <Route path="department" element={<DepartmentPage />} />
              <Route path="post" element={<PostPage />} />
              <Route path="check-registration" element={<CheckRegistrationPage />} />
            </Route>

            <Route path="/send-token" element={<SendToken />} />

            <Route path="/news" element={<News />} />
            <Route path="/formregistration" element={<FormRegistrationUniPage />} />
            <Route path="/formregistrationfaculty" element={<FormRegistrationFacultyPage />} />
            <Route path="/formregistrationbackground" element={<FormRegistrationBackgroundPage />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/:faculty" element={<Faculty />} />
            <Route path="/:faculty/department" element={<Department />} />
            <Route path="/university-info" element={<UniversityInfo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
