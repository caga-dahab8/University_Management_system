import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewStudentPage = ({ faculties, students, deleteStudent }) => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleFacultyChange = (e) => {
    setSelectedFaculty(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditClick = (student) => {
    navigate('/students', { state: { studentToEdit: student } });
  };

  const filteredStudents = students.filter((student) => {
    const fullName = `${student.firstName || ''} ${student.lastName || ''}`.trim().toLowerCase();
    const studentID = student.id ? student.id.toLowerCase() : '';
    const studentEmail = student.email ? student.email.toLowerCase() : '';
    const studentDob = student.dob ? student.dob.toLowerCase() : '';
    const studentAddress = student.address ? student.address.toLowerCase() : '';
    const studentPhone = student.phone ? student.phone.toLowerCase() : '';
    const studentFaculty = student.faculty ? student.faculty.toLowerCase() : '';

    const searchString = searchTerm.toLowerCase();

    return (
      (selectedFaculty === '' || student.faculty === selectedFaculty) &&
      (
        studentID.includes(searchString) ||
        fullName.includes(searchString) ||
        studentEmail.includes(searchString) ||
        studentDob.includes(searchString) ||
        studentAddress.includes(searchString) ||
        studentPhone.includes(searchString) ||
        studentFaculty.includes(searchString)
      )
    );
  });

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">View Students</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Select Faculty:</label>
        <select
          value={selectedFaculty}
          onChange={handleFacultyChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">All Faculties</option>
          {faculties.map((faculty) => (
            <option key={faculty.id} value={faculty.name}>
              {faculty.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Search:</label>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          <span className="absolute inset-y-0 right-4 flex items-center">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.42-1.42l5.38 5.38a1 1 0 01-1.42 1.42l-5.38-5.38zM10 16a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-blue-600 text-white">Student ID</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Full Name</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Email</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Date of Birth</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Address</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Phone</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Faculty</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id} className="bg-blue-200 hover:bg-blue-300">
              <td className="py-2 px-4 border-b border-gray-200">{student.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{`${student.firstName} ${student.lastName}`}</td>
              <td className="py-2 px-4 border-b border-gray-200">{student.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{student.dob}</td>
              <td className="py-2 px-4 border-b border-gray-200">{student.address}</td>
              <td className="py-2 px-4 border-b border-gray-200">{student.phone}</td>
              <td className="py-2 px-4 border-b border-gray-200">{student.faculty}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleEditClick(student)}
                  className="mr-2 p-1 bg-yellow-400 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to delete ${student.firstName} ${student.lastName}?`)) {
                      deleteStudent(student);
                    }
                  }}
                  className="p-1 bg-red-500 text-white rounded mt-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudentPage;
