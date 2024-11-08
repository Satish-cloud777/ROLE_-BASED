import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
