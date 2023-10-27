import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Initialize with the appropriate login status

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, you can use Firebase auth.signOut()

    // After successful logout, set isLoggedIn to false
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Logout handleLogout={handleLogout} />
      ) : (
        <p>You are logged out. .</p>
      )}
    </div>
  );
}

function Logout({ handleLogout }) {
  const handleCancel = () => {
    // If the user cancels the logout, do nothing or redirect as needed
  }

  return (
    <div className="logout-confirmation">
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default App;
