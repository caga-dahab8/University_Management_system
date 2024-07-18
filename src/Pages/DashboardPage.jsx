import React from 'react';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Assets/Dashboard.jpg'

const DashboardPage = ({ onLogout }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
        <img src={Dashboard} alt="Dashboard" className="w-full rounded shadow-md" />
        <button onClick={onLogout} className="mt-6 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  );
};
export default DashboardPage;
