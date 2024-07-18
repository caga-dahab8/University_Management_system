import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Student Registration System</h1>
      <nav>
        <Link to="/" className="mr-4 hover:text-gray-300">Login</Link>
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
