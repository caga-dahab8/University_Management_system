import React, { useState } from 'react';

const AttendancePage = ({ students, attendance, setAttendance }) => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [attendanceDate, setAttendanceDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAttendance = { student: selectedStudent, date: attendanceDate };
    setAttendance([...attendance, newAttendance]);
    localStorage.setItem('attendance', JSON.stringify([...attendance, newAttendance]));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Student Attendance</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700">Student *</label>
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a student</option>
            {students.map((student) => (
              <option key={student.email} value={student.email}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date *</label>
          <input
            type="date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Mark Attendance
        </button>
      </form>
      <h2 className="text-xl font-bold mb-4">Attendance Records</h2>
      <ul>
        {attendance.map((record, index) => (
          <li key={index} className="mb-2">
            {record.student} - {record.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendancePage;
