// src/components/AddPage.js
import React, { useState } from 'react';
import './AddPage.css';

export default function AddPage() {
  const [inputValue, setInputValue] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem('records')) || [];

    const newRecord = {
      id: Date.now(),
      name: inputValue,
      description: description,
      dueDate: dueDate,
      priority: priority
    };

    const updated = [...existing, newRecord];
    localStorage.setItem('records', JSON.stringify(updated));
    setInputValue('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
    alert('Record added!');
  };

  return (
    <div className="container">
      <h2>Add A Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task name"
          value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          required
        />
        <br />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <br />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}