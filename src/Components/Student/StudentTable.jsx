import React from 'react';

const StudentTable = ({ students, deleteStudent, setStudentToEdit }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Registered Students</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            {/* <th className="py-2 px-4 border-b">Email</th> */}
            {/* <th className="py-2 px-4 border-b">DOB</th> */}
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Faculty</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{student.id}</td>
              <td className="py-2 px-4 border-b">{`${student.firstName} ${student.lastName}`}</td>
              {/* <td className="py-2 px-4 border-b">{student.email}</td> */}
              {/* <td className="py-2 px-4 border-b">{student.dob}</td> */}
              <td className="py-2 px-4 border-b">{student.address}</td>
              <td className="py-2 px-4 border-b">{student.phone}</td>
              <td className="py-2 px-4 border-b">{student.faculty}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => setStudentToEdit(student)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteStudent(student)}
                  className="bg-red-500 text-white px-2 py-1 rounded mt-1"
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
