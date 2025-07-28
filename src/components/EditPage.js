import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

export default function EditPage() {
  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPriority, setEditPriority] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(stored);
  }, []);

  const handleEditClick = (id, name, description, priority) => {
    setEditId(id);
    setEditName(name);
    setEditDescription(description);
    setEditPriority(priority || 'Medium');
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
    setEditPriority('');
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
      setEditPriority('');
    }
    alert('Record deleted successfully!');
  };

  const handleCancel = () => {
    setEditId(null);
    setEditName('');
    setEditDescription('');
    setEditPriority('');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="container" style={{ flex: 1 }}>
        <h2 style={{ color: 'white' }}>Edit or Delete Record</h2>
        {records.length === 0 ? (
          <p style={{ color: 'white' }}>No records found.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {records.map(record => (
              <li
                key={record.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px',
                  color: 'white',
                }}
              >
                {editId === record.id ? (
                  <form
                    onSubmit={handleUpdate}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'stretch',
                      width: '100%',
                      background: 'rgba(255,255,255,0.2)',
                      padding: '18px',
                      borderRadius: '14px',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.04)',
                      border: '1px solid rgba(180,180,180,0.18)',
                      backdropFilter: 'blur(8px)',
                      marginBottom: '5px',
                    }}
                  >
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Name"
                      style={inputStyle}
                      required
                    />
                    <input
                      type="text"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Description"
                      style={inputStyle}
                      required
                    />
                    <select
                      value={editPriority}
                      onChange={(e) => setEditPriority(e.target.value)}
                      style={inputStyle}
                      required
                    >
                      <option value="High">High Priority</option>
                      <option value="Medium">Medium Priority</option>
                      <option value="Low">Low Priority</option>
                    </select>
                    <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                      <div style={{ flex: 1 }}>
                        <button type="submit" style={buttonGreen}>
                          Save
                        </button>
                      </div>
                      <div style={{ flex: 1 }}>
                        <button type="button" onClick={handleCancel} style={buttonRed}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <>
                    <span style={{ flex: 1 }}>{record.name}</span>
                    <span style={{ flex: 2, marginLeft: '10px', color: '#bbb' }}>{record.description}</span>
                    <span style={{ marginLeft: '10px', fontWeight: 500, color: '#ffd700' }}>
                      {record.priority || 'No priority'}
                    </span>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => handleEditClick(record.id, record.name, record.description, record.priority)}
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
    </div>
  );
}

// Reusable styles
const inputStyle = {
  width: '100%',
  marginBottom: '10px',
  padding: '10px 12px',
  fontSize: '1rem',
  border: '1px solid rgba(180,180,180,0.18)',
  borderRadius: '8px',
  background: 'rgba(255,255,255,0.9)',
  outline: 'none',
  boxShadow: 'none',
};

const buttonGreen = {
  width: '100%',
  padding: '10px 0',
  fontSize: '1rem',
  background: 'rgba(1, 133, 6, 1)',
  color: '#222',
  border: '1px solid rgba(76,175,80,0.18)',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.2s',
  fontWeight: 500,
};

const buttonRed = {
  width: '100%',
  padding: '10px 0',
  fontSize: '1rem',
  background: 'rgba(138, 14, 5, 0.84)',
  color: '#222',
  border: '1px solid rgba(244,67,54,0.18)',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.2s',
  fontWeight: 500,
};
