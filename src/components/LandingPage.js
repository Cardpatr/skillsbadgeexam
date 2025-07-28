// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="centered-container">
      <h1>Welcome to Your Productivity Hub!</h1>
      <p>
        Ever feel overwhelmed by your daily tasks? Our To-Do List Manager is here to help you take control and make your day more organized, productive, and stress-free.
      </p>
      <p>
        With just a few clicks, you can add new tasks, edit them as your priorities change, and check off completed items with satisfaction. Whether you’re planning your work projects, personal errands, or anything in between, our intuitive dashboard keeps everything at your fingertips.
      </p>
      <p>
        Ready to experience a smoother, more organized day? Log in now and start turning your to-dos into accomplishments!
      </p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}
