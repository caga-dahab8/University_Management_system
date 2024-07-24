import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="w-64 bg-blue-800 text-white h-screen flex flex-col justify-between p-4">
      <nav className="space-y-4">
        <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600">
          Dashboard
        </Link>
        <Link to="/faculties" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600">
          Faculties
        </Link>
        <Link to="/students" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600">
          Students
        </Link>
      </nav>
      <div>
        <button
          onClick={onLogout}
          className="block w-full py-2.5 px-4 rounded transition duration-200 hover:bg-red-600 text-left"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
