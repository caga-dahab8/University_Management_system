import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      setStudents(storedStudents);
    }
  }, []);

  const addStudent = (student) => {
    const newStudents = [...students, student];
    setStudents(newStudents);
    localStorage.setItem('students', JSON.stringify(newStudents));
  };

  return (
    <div>
      <h1>Student Registration System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default Student;
