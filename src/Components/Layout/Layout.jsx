import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate, FaUsers, FaClipboardList, FaBars, FaSignOutAlt } from 'react-icons/fa';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';

const Layout = ({ onLogout, children, username, profilePicture }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onLogout={onLogout} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Header onToggleSidebar={toggleSidebar} username={username} profilePicture={profilePicture} />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;