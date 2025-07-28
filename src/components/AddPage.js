import React, { useState, useEffect } from 'react';
import './AddPage.css';
import { useNavigate } from 'react-router-dom';

export default function AddPage() {
  const [inputValue, setInputValue] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      id: Date.now(),
      name: inputValue,
      description,
      dueDate,
      priority,
    };

    const updated = [...records, newRecord];
    localStorage.setItem('records', JSON.stringify(updated));
    setRecords(updated);

    setInputValue('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate('/dashboard')}>
        Return to Dashboard
      </button>

      <div className="page-wrapper">
        <div className="form-section">
          <h2>Add a Task</h2>
          <form onSubmit={handleSubmit}>
            <label>Task Name</label>
            <input
              type="text"
              placeholder="e.g., Finish report"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />

            <label>Description</label>
            <textarea
              placeholder="Brief description of the task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
            />

            <label>Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />

            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <button type="submit">Add Task</button>
          </form>
        </div>

        <div className="list-section">
          <h2>Current Activities</h2>
          <div className="task-list">
            {records.length === 0 ? (
              <p className="empty-msg">No tasks added yet.</p>
            ) : (
              records.map((record) => (
                <div key={record.id} className="task-card">
                  <h3>{record.name}</h3>
                  <p>{record.description}</p>
                  <div className="task-meta">
                    <span>Due: {record.dueDate}</span>
                    <span className={`priority ${record.priority.toLowerCase()}`}>
                      {record.priority}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
