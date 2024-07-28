import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = ({ students, faculties }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="flex-shrink-0">
            <FontAwesomeIcon icon={faUserGraduate} className="h-12 w-12 text-blue-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">Total Students</h2>
            <p className="text-gray-600">{students.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="flex-shrink-0">
            <FontAwesomeIcon icon={faUserTie} className="h-12 w-12 text-blue-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">Total Faculties</h2>
            <p className="text-gray-600">{faculties.length}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="your-dashboard-image-url" alt="Dashboard" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default DashboardPage;
