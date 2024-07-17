import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-800 text-white p-4 H-Full">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/faculties" className="text-white hover:text-gray-300">Faculty Page</Link>
          </li>
          <li>
            <Link to="/students" className="text-white hover:text-gray-300">Student Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
