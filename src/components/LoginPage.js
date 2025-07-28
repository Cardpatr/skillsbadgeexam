// src/components/LoginPage.js
import React from 'react';
import './LoginPage.css'; 
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="lighter-btn">Login</button>
        </form>
        <Link to="/" className="back-link">← Back to Landing Page</Link>
      </div>
    </div>
  );
}
