import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import AddPage from './components/AddPage';
import EditPage from './components/EditPage';
import ReportPage from './components/ReportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddPage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="report" element={<ReportPage />} />

          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
