import React from 'react';

const StudentTable = ({ students, deleteStudent, setStudentToEdit }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Registered Students</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Email</th>
            <th className="py-2 px-4 border-b border-gray-300">Age</th>
            <th className="py-2 px-4 border-b border-gray-300">Faculty</th>
            <th className="py-2 px-4 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="bg-gray-50 hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">{student.name}</td>
              <td className="py-2 px-4 border-b border-gray-300">{student.email}</td>
              <td className="py-2 px-4 border-b border-gray-300">{student.age}</td>
              <td className="py-2 px-4 border-b border-gray-300">{student.faculty}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                <button
                  onClick={() => setStudentToEdit(student)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteStudent(student)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
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

export default StudentTable;
