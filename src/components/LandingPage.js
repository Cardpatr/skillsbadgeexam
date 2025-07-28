// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Make sure this contains updated styles

export default function LandingPage() {
  return (
    <div className="dashboard-content">
      <div className="container">
        <h2 className="landing-title">Welcome to Your Productivity Hub!</h2>
        <p className="landing-subtitle">Get started by exploring the features below:</p>

        <div className="landing-cards">
          {[
            {
              icon: "https://img.icons8.com/ios-filled/50/000000/add--v1.png",
              title: "Add Tasks",
              desc: "Quickly add new to-dos and stay organized."
            },
            {
              icon: "https://img.icons8.com/ios-filled/50/000000/edit--v1.png",
              title: "Organize & Edit",
              desc: "Easily update and manage your tasks."
            },
            {
              icon: "https://img.icons8.com/ios-filled/50/000000/report-card.png",
              title: "Track Progress",
              desc: "See your accomplishments at a glance."
            },
          ].map((item, idx) => (
            <div key={idx} className="dashboard-card">
              <img src={item.icon} alt={item.title} className="dashboard-card-icon" />
              <div className="dashboard-card-title">{item.title}</div>
              <div className="dashboard-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="login-card-container">
          <Link to="/login" className="dashboard-card-link">
            <div className="dashboard-card login-card">
              <span role="img" aria-label="login" className="login-icon">🔑</span>
              <div className="dashboard-card-title">Login to Get Started</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
