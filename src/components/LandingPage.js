// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="centered-container">
      <h1>Welcome to the App</h1>
      <p>
        This application is a powerful and user-friendly To-Do List Manager designed to help you organize your tasks efficiently. With this tool, you can easily add, edit, and remove tasks, ensuring you stay productive and on top of your daily responsibilities.
      </p>
      <p>
        The dashboard provides a clear overview of your current tasks, while intuitive navigation allows you to quickly access features such as adding new tasks, editing existing ones, and generating reports on your progress. Whether you are managing personal errands or work projects, our app streamlines your workflow and boosts your productivity.
      </p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}
