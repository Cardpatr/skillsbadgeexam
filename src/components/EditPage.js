// src/components/EditPage.js
import React, { useEffect, useState } from 'react';

export default function EditPage() {
  const [records, setRecords] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [newName, setNewName] = useState('');

  // Load records from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(stored);
  }, []);

  // Handle selection change
  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    const selectedRecord = records.find(record => record.id === Number(id));
    setNewName(selectedRecord ? selectedRecord.name : '');
  };

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedRecords = records.map(record =>
      record.id === Number(selectedId) ? { ...record, name: newName } : record
    );
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    alert('Record updated successfully!');
  };

  // Handle delete
  const handleDelete = () => {
    const updatedRecords = records.filter(record => record.id !== Number(selectedId));
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    setSelectedId('');
    setNewName('');
    alert('Record deleted successfully!');
  };

  return (
    <div className="container">
      <h2>Edit or Delete Record</h2>
      <form onSubmit={handleUpdate}>
        <select value={selectedId} onChange={handleSelect}>
          <option value="">-- Select a record --</option>
          {records.map(record => (
            <option key={record.id} value={record.id}>
              {record.name}
            </option>
          ))}
        </select>

        {selectedId && (
          <>
            <input
              type="text"
              placeholder="Edit data"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{ margin: '10px 0', display: 'block', width: '100%' }}
            />
            <button type="submit">Update</button>
            <button
              type="button"
              onClick={handleDelete}
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
            >
              Delete
            </button>
          </>
        )}
      </form>
    </div>
  );
}
