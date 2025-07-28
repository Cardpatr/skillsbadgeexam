// src/components/LoginPage.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="centered-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <br /><br />
        <input type="password" placeholder="Password" required />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <br />
      <Link to="/">Back to Landing Page</Link>
    </div>
  );
}
