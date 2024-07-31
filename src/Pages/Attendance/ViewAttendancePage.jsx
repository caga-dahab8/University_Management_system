import React, { useState, useEffect } from 'react';

const ViewAttendancePage = ({ faculties = [] }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');

  useEffect(() => {
    const storedAttendance = JSON.parse(localStorage.getItem('attendance')) || [];
    setAttendanceRecords(storedAttendance);
  }, []);

  const filteredRecords = attendanceRecords.filter(
    record => 
      (!selectedDate || record.date === selectedDate) && 
      (!selectedFaculty || record.faculty === selectedFaculty)
  );

  return (
    <div className="viewattendance container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">View Attendance</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Select Faculty:</label>
        <select
          value={selectedFaculty}
          onChange={(e) => setSelectedFaculty(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">All Faculties</option>
          {faculties.map(faculty => (
            <option key={faculty.id} value={faculty.name}>{faculty.name}</option>
          ))}
        </select>
      </div>
      {filteredRecords.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Student Name</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record, index) => (
              record.students && record.students.map(student => (
                <tr key={`${index}-${student.id}`}>
                  <td className="py-2 px-4 border-b">{record.date}</td>
                  <td className="py-2 px-4 border-b">{`${student.firstName} ${student.lastName}`}</td>
                  <td className="py-2 px-4 border-b">
                    {record.attendance[student.id] ? 'Present' : 'Absent'}
                  </td>
                </tr>
              ))
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
