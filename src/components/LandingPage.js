import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const iconStyle = {
    fontSize: '56px',
    color: '#75eff3ff',
    marginBottom: '12px'
  };

  const iconStyle2 = {
    fontSize: '28px',
    color: '#1a1a1aff'
  };

  const submitBtnStyle = {
    padding: '12px 24px',
    backgroundColor: '#75eff3ff',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    maxWidth: '300px',
    margin: '20px auto'
  };

  return (
    
    <div className="dashboard-content">
      <div className="container">
        <h1 className="landing-title">Welcome to Your Productivity Hub!</h1>
        <p className="landing-subtitle">Get started by exploring the features below:</p>

        <div className="landing-cards">
          {[
            {
              icon: "add",
              title: "Add Tasks",
              desc: "Quickly add new to-dos and stay organized."
            },
            {
              icon: "edit",
              title: "Organize & Edit",
              desc: "Easily update and manage your tasks."
            },
            {
              icon: "assessment",
              title: "Track Progress",
              desc: "See your accomplishments at a glance."
            },
          ].map((item, idx) => (
            <div key={idx} className="dashboard-card">
              <span className="material-icons" style={iconStyle}>
                {item.icon}
              </span>
              <div className="dashboard-card-title">{item.title}</div>
              <div className="dashboard-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="login-card-container">
          <Link to="/login" className="dashboard-card-link" style={{ textDecoration: 'none' }}>
            <div style={submitBtnStyle}>
              <span className="material-icons" style={iconStyle2}>login</span>
              <div>Login to Get Started</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
