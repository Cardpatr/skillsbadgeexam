// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="centered-container">
      <h1>Welcome to the App</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}
