// src/components/AddPage.js
import React, { useState } from 'react';

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
    </div>
  );
}
