// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Reuse dashboard styles for layout and cards

export default function LandingPage() {
  return (
    <div className="dashboard-content">
      <div className="container">
        <h2>Welcome to Your Productivity Hub!</h2>
        <p>Get started by exploring the features below:</p>
        <div className="card-row">
          {/* Add Tasks Card */}
          <div className="dashboard-card">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/add--v1.png"
              alt="Add Tasks"
              className="dashboard-card-icon"
            />
            <div><strong>Add Tasks</strong></div>
            <div style={{ fontSize: '0.95rem', marginTop: 6 }}>Quickly add new to-dos and stay organized.</div>
          </div>
          {/* Organize & Edit Card */}
          <div className="dashboard-card">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/edit--v1.png"
              alt="Organize & Edit"
              className="dashboard-card-icon"
            />
            <div><strong>Organize & Edit</strong></div>
            <div style={{ fontSize: '0.95rem', marginTop: 6 }}>Easily update and manage your tasks.</div>
          </div>
          {/* Track Progress Card */}
          <div className="dashboard-card">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/report-card.png"
              alt="Track Progress"
              className="dashboard-card-icon"
            />
            <div><strong>Track Progress</strong></div>
            <div style={{ fontSize: '0.95rem', marginTop: 6 }}>See your accomplishments at a glance.</div>
          </div>
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <Link to="/login" className="dashboard-card-link">
            <div className="dashboard-card" style={{ display: 'inline-block', minWidth: 180 }}>
              <span role="img" aria-label="login" style={{ fontSize: 28, display: 'block', marginBottom: 8 }}>🔑</span>
              <div><strong>Login to Get Started</strong></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
