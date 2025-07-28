// src/components/ReportPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReportPage.css';

export default function ReportPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(stored);
  }, []);

  return (
    <div className="container" style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ flex: '0 0 auto' }}>Report Records</h2>
      <div style={{ flex: '1 1 auto', overflowY: 'auto' }}>
        <ul>
          {records.length > 0 ? (
            records.map((record) => (
              <li key={record.id}>
                <strong>Name:</strong> {record.name} <br />
                <strong>Description:</strong> {record.description || '—'} <br />
                <strong>Priority:</strong> {record.priority || 'Medium'}
              </li>
            ))
          ) : (
            <li>No records found.</li>
          )}
        </ul>
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
