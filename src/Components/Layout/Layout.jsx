import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";

const Layout = ({ children, isAuthenticated, onLogout }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
        <div className="flex flex-1">
          <Sidebar onLogout={onLogout} />
          <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Layout;