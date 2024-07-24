import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-800 text-white h-full p-4">
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
    </aside>
  );
};

export default Sidebar;
