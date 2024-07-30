import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dashboardimg from '../Assets/Dashboard.jpg'


const DashboardPage = ({ students, faculties, teachers }) => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/faculties" className="bg-white shadow-lg rounded-lg p-4 flex items-center">
          <FaChalkboardTeacher className="text-blue-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">{faculties.length} Faculties</h2>
          </div>
        </Link>
        <Link to="/students" className="bg-white shadow-lg rounded-lg p-4 flex items-center">
          <FaUserGraduate className="text-green-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">{students.length} Students</h2>
          </div>
        </Link>
        <Link to="/teachers" className="bg-white shadow-lg rounded-lg p-4 flex items-center">
          <FaChalkboardTeacher className="text-yellow-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">{teachers.length} Teachers</h2>
          </div>
        </Link>
      </div>
      <div className="mt-8">
        <img src={dashboardimg} alt="Dashboard Image" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default DashboardPage;
