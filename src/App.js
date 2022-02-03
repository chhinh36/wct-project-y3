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
  
} from './pages';
import {Navbar, Footer, Sidebar} from './components';

function App() {
  return (
    <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
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
  );
}

export default App;
