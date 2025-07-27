// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);

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
        </ul>
      </nav>
    </div>
  );
}
