import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [recent, setRecent] = useState([]);
  const navigate = useNavigate();

  const refreshDashboardData = () => {
    const records = JSON.parse(localStorage.getItem('records')) || [];

    const completedTasks = records.filter(
      (r) => r.status?.toLowerCase() === 'complete'
    );
    const pendingTasks = records.filter(
      (r) => !r.status || r.status?.toLowerCase() === 'pending'
    );

    setTotal(records.length);
    setCompleted(completedTasks.length);
    setPending(pendingTasks.length);

    const sortedPending = [...pendingTasks].sort((a, b) => {
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return b.id - a.id;
    });

    setRecent(sortedPending.slice(0, 5));
  };

  useEffect(() => {
    refreshDashboardData();
  }, []);

  const markAsComplete = (taskId) => {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const updated = records.map((task) =>
      task.id === taskId ? { ...task, status: 'Complete' } : task
    );
    localStorage.setItem('records', JSON.stringify(updated));
    refreshDashboardData();
  };

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span className="dashboard-icon material-icons">assignment</span>
          <div>
            <div className="dashboard-number">{total}</div>
            <div className="dashboard-label">Total Tasks</div>
          </div>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-icon material-icons">check_circle</span>
          <div>
            <div className="dashboard-number">{completed}</div>
            <div className="dashboard-label">Completed Tasks</div>
          </div>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-icon material-icons">pending_actions</span>
          <div>
            <div className="dashboard-number">{pending}</div>
            <div className="dashboard-label">Pending Tasks</div>
          </div>
        </div>
      </div>

      <div className="recent-section">
        <h3>Recent Activities</h3>
        <div className="recent-list">
          {recent.length === 0 && (
            <div className="recent-empty">No recent tasks.</div>
          )}
          {recent.map((task, idx) => (
            <div className="recent-item" key={task.id || idx}>
              <div className="recent-title">{task.name}</div>
              <div className="recent-meta">
                <span className="recent-priority">{task.priority}</span>
                {task.dueDate && (
                  <span className="recent-due">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="recent-desc">{task.description}</div>
              {task.status?.toLowerCase() !== 'complete' && (
                <button
                  className="complete-btn"
                  onClick={() => markAsComplete(task.id)}
                >
                  Mark as Complete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="recent-section quick-actions">
        <h3>Shortcuts</h3>
        <div className="quick-buttons">
          <button className="dashboard-btn lighter-btn" onClick={() => navigate('add')}>
            Add New Task
          </button>
          <button className="dashboard-btn lighter-btn" onClick={() => navigate('report')}>
            View All Tasks
          </button>
        </div>
      </div>
    </div>
  );
}
