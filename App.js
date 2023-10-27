import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Logout from './Logout';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
