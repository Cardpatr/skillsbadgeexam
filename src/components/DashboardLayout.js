import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';
import { Outlet, useLocation } from 'react-router-dom';

export default function DashboardLayout() {
  const location = useLocation();

  let headerText = 'Dashboard';
  if (location.pathname.includes('/dashboard/edit')) {
    headerText = 'Edit Page';
  } else if (location.pathname.includes('/dashboard/add')) {
    headerText = 'Add Page';
  } else if (location.pathname.includes('/dashboard/report')) {
    headerText = 'Report Page';
  }

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>{headerText}</h1>
      </header>
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}