import React from 'react';

const TeacherTable = ({ teachers, deleteTeacher, setTeacherToEdit }) => {
  return (
    <table className="teachertable min-w-full bg-white mt-4">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Full Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Phone</th>
          <th className="py-2 px-4 border-b">Degree</th>
          <th className="py-2 px-4 border-b">Faculty</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher) => (
          <tr key={teacher.id}>
            <td className="py-2 px-4 border-b">{teacher.fullName}</td>
            <td className="py-2 px-4 border-b">{teacher.email}</td>
            <td className="py-2 px-4 border-b">{teacher.phone}</td>
            <td className="py-2 px-4 border-b">{teacher.degree}</td>
            <td className="py-2 px-4 border-b">{teacher.faculty}</td>
            <td className="py-2 px-4 border-b">
              <button
                onClick={() => setTeacherToEdit(teacher)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTeacher(teacher)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeacherTable;
