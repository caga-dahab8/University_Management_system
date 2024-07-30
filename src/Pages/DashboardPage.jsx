import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboardPage = ({ students, faculties, teachers }) => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 tform shadow-2xl p-4">
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
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h2 className="text-lg font-bold">Awards</h2>
          <p className="text-2xl">50+</p>
          <i className="fas fa-award text-4xl text-yellow-500"></i>
        </div>
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h2 className="text-lg font-bold">Revenue</h2>
          <p className="text-2xl">$505M</p>
          <i className="fas fa-dollar-sign text-4xl text-red-500"></i>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow-md mb-6 mt-10">
        <h2 className="text-2xl font-bold mb-4">Star Students</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Marks</th>
              <th className="py-2 px-4 border-b">Percentage</th>
              <th className="py-2 px-4 border-b">Year</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="py-2 px-4 border-b">CA211048</td>
                <td className="py-2 px-4 border-b">Suleiman Sidow Mukhtar</td>
                <td className="py-2 px-4 border-b">690</td>
                <td className="py-2 px-4 border-b">99.2%</td>
                <td className="py-2 px-4 border-b">2023</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">CA211032</td>
                <td className="py-2 px-4 border-b">Kuciil Abdiwahab Hassan</td>
                <td className="py-2 px-4 border-b">687</td>
                <td className="py-2 px-4 border-b">99%</td>
                <td className="py-2 px-4 border-b">2022</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">CA211062</td>
                <td className="py-2 px-4 border-b">Abdikarim Abdulahi Mohamed</td>
                <td className="py-2 px-4 border-b">670</td>
                <td className="py-2 px-4 border-b">97.6%</td>
                <td className="py-2 px-4 border-b">2022</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">CA211098</td>
                <td className="py-2 px-4 border-b">Hani Mohamett Farah</td>
                <td className="py-2 px-4 border-b">669</td>
                <td className="py-2 px-4 border-b">97.4%</td>
                <td className="py-2 px-4 border-b">2021</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">CA211048</td>
                <td className="py-2 px-4 border-b">Ahmed Abas Abdulahi</td>
                <td className="py-2 px-4 border-b">660</td>
                <td className="py-2 px-4 border-b">95%</td>
                <td className="py-2 px-4 border-b">2020</td>
              </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Student Activity</h2>
        <ul>
          <li className="flex justify-between py-2 border-b">
            <div>
              <h3 className="font-bold">1st place in "Chess"</h3>
              <p>Sadam Hussein won 1st place in "Chess"</p>
            </div>
            <span className="text-gray-500">1 day ago</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <div>
              <h3 className="font-bold">Participated in "Carrom"</h3>
              <p>Justin Lee participated in "Carrom"</p>
            </div>
            <span className="text-gray-500">3 days ago</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <div>
              <h3 className="font-bold">International conference in "St. John School"</h3>
              <p>Justin Lee attended international conference in "St. John School"</p>
            </div>
            <span className="text-gray-500">3 hours ago</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <div>
              <h3 className="font-bold">Won 1st place in "Chess"</h3>
              <p>Sadam Hussein won 1st place in "Chess"</p>
            </div>
            <span className="text-gray-500">2 weeks ago</span>
          </li>
        </ul>
      </div>
      <footer/>
    </div>
    
  );
};

export default DashboardPage;
