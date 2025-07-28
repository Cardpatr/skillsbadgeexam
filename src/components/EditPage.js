// src/components/EditPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function EditPage() {
  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(stored);
  }, []);

  const handleEditClick = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedRecords = records.map(record =>
      record.id === editId ? { ...record, name: editName } : record
    );
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    setEditId(null);
    setEditName('');
    alert('Record updated successfully!');
  };

  const handleDelete = (id) => {
    const updatedRecords = records.filter(record => record.id !== id);
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    if (editId === id) {
      setEditId(null);
      setEditName('');
    }
    alert('Record deleted successfully!');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="container" style={{ flex: 1 }}>
        <h2>Edit or Delete Record</h2>
        {records.length === 0 ? (
          <p>No records found.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {records.map(record => (
              <li key={record.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                {editId === record.id ? (
                  <form onSubmit={handleUpdate} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      style={{ flex: 1, marginRight: '10px' }}
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditId(null)} style={{ marginLeft: '5px' }}>
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <span style={{ flex: 1 }}>{record.name}</span>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => handleEditClick(record.id, record.name)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ marginLeft: '5px', backgroundColor: 'red', color: 'white' }}
                      onClick={() => handleDelete(record.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
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
