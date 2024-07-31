import React from 'react';
import FacultyForm from '../../Components/Faculty/FacultyForm';

const FacultyPage = ({ faculties, addOrUpdateFaculty, deleteFaculty, setFacultyToEdit, facultyToEdit }) => {
  return (
    <div className="facultypage container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Faculty Registration</h1>
      <FacultyForm addOrUpdateFaculty={addOrUpdateFaculty} facultyToEdit={facultyToEdit} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Registered Faculties</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-blue-600 text-white">Faculty ID</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Faculty Name</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id} className="bg-blue-200 hover:bg-blue-300">
              <td className="py-2 px-4 border-b border-gray-200">{faculty.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{faculty.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => setFacultyToEdit(faculty)}
                  className="mr-2 p-1 bg-yellow-400 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteFaculty(faculty)}
                  className="p-1 bg-red-500 text-white rounded"
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

export default FacultyPage;
