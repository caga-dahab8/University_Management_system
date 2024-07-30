// src/Pages/Attendance/AttendancePage.jsx
import React, { useState, useEffect } from 'react';

const AttendancePage = ({ faculties, students, attendance, setAttendance }) => {
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
      attendance
    };
    storedAttendance.push(newAttendanceRecord);
    localStorage.setItem('attendance', JSON.stringify(storedAttendance));
    alert('Attendance saved successfully!');
  };

  return (
    <div className="container mx-auto mt-10">
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
            students.filter(student => student.faculty === selectedFaculty).map(student => (
              <div key={student.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={attendance[student.id]}
                  onChange={() => handleAttendanceChange(student.id)}
                  className="mr-2"
                />
                <span>{student.name}</span>
              </div>
            ))
          ) : (
            <p>Select a faculty to see students</p>
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Attendance
        </button>
      </form>
    </div>
  );
};

export default AttendancePage;
