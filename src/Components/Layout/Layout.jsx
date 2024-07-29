import React, { useState } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';

const Layout = ({ onLogout, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} />
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={handleToggleSidebar} username="Admin" />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
