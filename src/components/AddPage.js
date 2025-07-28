// src/components/AddPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddPage() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem('records')) || [];

    const newRecord = {
      id: Date.now(),
      name: inputValue
    };

    const updated = [...existing, newRecord];
    localStorage.setItem('records', JSON.stringify(updated));
    setInputValue('');
    alert('Record added!');
  };

  return (
    <div className="container">
      <h2>Add Record</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter data"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
          required/>
        <br />
        <button type="submit">Add</button>
      </form>
      <Link to="/dashboard" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <button>Back</button>
      </Link>
    </div>
  );
}
