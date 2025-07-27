// src/components/ReportPage.js
import React, { useEffect, useState } from 'react';

export default function ReportPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(stored);
  }, []);

  return (
    <div className="container">
      <h2>Report Records</h2>
      <ul>
        {records.length > 0 ? (
          records.map((record) => (
            <li key={record.id}>{record.name}</li>
          ))
        ) : (
          <li>No records found.</li>
        )}
      </ul>
    </div>
  );
}
