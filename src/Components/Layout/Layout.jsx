import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate, FaUsers, FaClipboardList, FaBars, FaSignOutAlt } from 'react-icons/fa';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';

const Layout = ({ onLogout, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onLogout={onLogout} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <header className="bg-gray-100 shadow p-4 flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-gray-700">
            <FaBars />
          </button>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded mr-4"
            />
            <div className="flex items-center">
              <img
                src="path_to_user_image.jpg"
                alt="User"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="mr-4">Admin</span>
              <button onClick={onLogout} className="text-red-500">
                Logout
              </button>
            </div>
          </div>
        </header>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
