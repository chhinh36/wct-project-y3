import React from 'react';
import {Outlet} from 'react-router-dom';
import {
    Navbar,
    Sidebar,
    LoadForm
} from '../components/index';
import '../styles/dashboard.scss';

const DashboardLayout = () => {
  return (
      <div className="dashboard-wrapper">
        <LoadForm />
        <Navbar />
        <div className="wrapper-nav-body">
          <Sidebar />
          <div className="dashboard-page">
              <Outlet />
          </div>
        </div>
      </div>
  );
};

export default DashboardLayout;
