import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
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
