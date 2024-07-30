import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate, FaUsers, FaClipboardList, FaBars } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, toggleSidebar, onLogout }) => {
  return (
    <div className={`fixed inset-y-0 left-0 bg-gray-800 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex flex-col h-full">
        {/* <div className="flex items-center justify-between h-16 px-4">
          <button onClick={toggleSidebar} className="text-white">
            <FaBars />
          </button>
          {isSidebarOpen && <span className="text-lg font-bold">Menu</span>}
        </div> */}
        <nav className="flex-1">
          <ul>
            <li>
              <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-700 mb-5 mt-2 text-2xl">
                <FaUsers className="mr-3" />
                {isSidebarOpen && 'Dashboard'}
              </Link>
            </li>
            <li>
              <Link to="/faculties" className="flex items-center px-4 py-2 hover:bg-gray-700">
                <FaChalkboardTeacher className="mr-3" />
                {isSidebarOpen && 'Faculties'}
              </Link>
            </li>
            <li>
              <Link to="/students" className="flex items-center px-4 py-2 hover:bg-gray-700">
                <FaUserGraduate className="mr-3" />
                {isSidebarOpen && 'Students'}
              </Link>
            </li>
            <li>
              <Link to="/teachers" className="flex items-center px-4 py-2 hover:bg-gray-700">
                <FaChalkboardTeacher className="mr-3" />
                {isSidebarOpen && 'Teachers'}
              </Link>
            </li>
            <li>
              <Link to="/attendance" className="flex items-center px-4 py-2 hover:bg-gray-700">
                <FaClipboardList className="mr-3" />
                {isSidebarOpen && 'Attendance'}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center h-16">
          <button onClick={onLogout} className="text-red-500">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
