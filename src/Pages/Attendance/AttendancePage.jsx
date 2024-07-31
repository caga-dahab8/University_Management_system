import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AttendancePage = ({ faculties = [], students = [], attendance, setAttendance }) => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (selectedFaculty) {
      const facultyStudents = students.filter(student => student.faculty === selectedFaculty);
      const initialAttendance = {};
      facultyStudents.forEach(student => {
        initialAttendance[student.id] = false;
      });
      setAttendance(initialAttendance);
    } else {
      setAttendance({});
    }
  }, [selectedFaculty, students, setAttendance]);

  const handleAttendanceChange = (studentId) => {
    setAttendance(prevState => ({
      ...prevState,
      [studentId]: !prevState[studentId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedAttendance = JSON.parse(localStorage.getItem('attendance')) || [];
    const newAttendanceRecord = {
      date,
      faculty: selectedFaculty,
      attendance,
      students: students.filter(student => student.faculty === selectedFaculty)
    };
    storedAttendance.push(newAttendanceRecord);
    localStorage.setItem('attendance', JSON.stringify(storedAttendance));
    alert('Attendance saved successfully!');
  };

  return (
    <div className="attendance container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Mark Attendance</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Select Faculty:</label>
          <select
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select Faculty</option>
            {faculties.map(faculty => (
              <option key={faculty.id} value={faculty.name}>{faculty.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Students:</label>
          {Object.keys(attendance).length > 0 ? (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Student ID</th>
                  <th className="py-2 px-4 border-b">Full Name</th>
                  <th className="py-2 px-4 border-b">Present</th>
                </tr>
              </thead>
              <tbody>
              {students.filter(student => student.faculty === selectedFaculty).map(student => (
                <tr key={student.id}>
                  <td className="py-2 px-4 border-b">{student.id}</td>
                  <td className="py-2 px-4 border-b">{student.firstName} {student.lastName}</td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="checkbox"
                      checked={attendance[student.id]}
                      onChange={() => handleAttendanceChange(student.id)}
                    />
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          ) : (
            <p>Select a faculty to see students</p>
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Attendance
        </button>
      </form>
      <Link to="/view-attendance" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">
        View Attendance Records
      </Link>
    </div>
  );
};

export default AttendancePage;
