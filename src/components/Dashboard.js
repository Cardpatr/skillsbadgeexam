// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <div className="container">
        <h2>Welcome to the Dashboard</h2>
        <p>Select a function from the sidebar.</p>
        <div className="card-row">
          {/* Add Card */}
          <Link to="/dashboard/add" className="dashboard-card-link">
            <div className="dashboard-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/add--v1.png"
                alt="Add"
                className="dashboard-card-icon"
              />
              <div>Add</div>
            </div>
          </Link>
          {/* Edit Card */}
          <Link to="/dashboard/edit" className="dashboard-card-link">
            <div className="dashboard-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/edit--v1.png"
                alt="Edit"
                className="dashboard-card-icon"
              />
              <div>Edit</div>
            </div>
          </Link>
          {/* Report Card */}
          <Link to="/dashboard/report" className="dashboard-card-link">
            <div className="dashboard-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/report-card.png"
                alt="Report"
                className="dashboard-card-icon"
              />
              <div>Report</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
