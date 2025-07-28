// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    // localStorage.removeItem('auth'); // Uncomment if you store auth info
    navigate('/login');
  };

  return (
    <div
      className={`sidebar ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/add">Add</Link></li>
          <li><Link to="/dashboard/edit">Edit</Link></li>
          <li><Link to="/dashboard/report">Report</Link></li>
          <li>
            <a
              href="/login"
              onClick={handleLogout}
              className="sidebar-logout-link"
              tabIndex={0}
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
