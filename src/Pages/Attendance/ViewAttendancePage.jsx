// src/Pages/Attendance/ViewAttendancePage.jsx
import React, { useState, useEffect } from 'react';

const ViewAttendancePage = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const storedAttendance = JSON.parse(localStorage.getItem('attendance')) || [];
    setAttendanceRecords(storedAttendance);
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">View Attendance</h1>
      {attendanceRecords.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Faculty</th>
              <th className="py-2 px-4 border-b">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{record.date}</td>
                <td className="py-2 px-4 border-b">{record.faculty}</td>
                <td className="py-2 px-4 border-b">
                  {Object.keys(record.attendance).map(studentId => (
                    <div key={studentId} className="flex items-center">
                      <span>{studentId}: </span>
                      <span>{record.attendance[studentId] ? 'Present' : 'Absent'}</span>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No attendance records found</p>
      )}
    </div>
  );
};

export default ViewAttendancePage;
