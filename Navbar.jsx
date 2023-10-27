import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle a successful login
  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  }

  // Function to handle the logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  // Determine if the user is on the Dashboard page
  const isOnDashboard = location.pathname === '/dashboard';

  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">Dev@Deakin</Link>
        <input type="text" placeholder="Search..." />
        {isOnDashboard && isLoggedIn ? (
          <div className="signout-button">
            <Link to="/Logout" onClick={handleLogout}>Log Out</Link>
          </div>
        ) : !isLoggedIn ? (
          <div className="login-button">
            <Link to="/Login" onClick={handleSuccessfulLogin}>Login</Link>
          </div>
        ) : null}
        <div className="post-button">
          <a href="/">Post</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
