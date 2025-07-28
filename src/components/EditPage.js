// src/components/EditPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function EditPage() {
  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPriority, setEditPriority] = useState('Medium');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(stored);
  }, []);

  const handleEditClick = (record) => {
    setEditId(record.id);
    setEditName(record.name);
    setEditDescription(record.description || '');
    setEditPriority(record.priority || 'Medium');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedRecords = records.map(record =>
      record.id === editId
        ? { ...record, name: editName, description: editDescription, priority: editPriority }
        : record
    );
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    setEditId(null);
    setEditName('');
    setEditDescription('');
    setEditPriority('Medium');
    alert('Record updated successfully!');
  };

  const handleDelete = (id) => {
    const updatedRecords = records.filter(record => record.id !== id);
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    if (editId === id) {
      setEditId(null);
      setEditName('');
      setEditDescription('');
      setEditPriority('Medium');
    }
    alert('Record deleted successfully!');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="container" style={{ flex: 1, padding: '20px' }}>
        <h2>Edit or Delete Record</h2>
        {records.length === 0 ? (
          <p>No records found.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {records.map(record => (
              <li
                key={record.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '15px',
                  borderRadius: '10px',
                  background: 'rgba(200, 200, 200, 0.1)',
                  border: '1px solid rgba(150,150,150,0.3)',
                  backdropFilter: 'blur(5px)',
                  marginBottom: '20px',
                }}
              >
                {editId === record.id ? (
                  <form onSubmit={handleUpdate}>
                    <input
                      type="text"
                      placeholder="Name"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      required
                      style={{ width: '100%', marginBottom: '10px' }}
                    />
                    <textarea
                      placeholder="Description"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      rows="3"
                      style={{ width: '100%', marginBottom: '10px' }}
                    />
                    <select
                      value={editPriority}
                      onChange={(e) => setEditPriority(e.target.value)}
                      style={{ width: '100%', marginBottom: '10px' }}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button type="submit">Save</button>
                      <button type="button" onClick={() => setEditId(null)}>
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <strong>Name:</strong> {record.name}
                    <strong>Description:</strong> {record.description || '—'}
                    <strong>Priority:</strong> {record.priority || 'Medium'}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      <button onClick={() => handleEditClick(record)}>Edit</button>
                      <button
                        onClick={() => handleDelete(record.id)}
                        style={{ backgroundColor: 'red', color: 'white' }}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link to="/dashboard" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <button>Back</button>
      </Link>
    </div>
  );
}
