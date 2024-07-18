import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FacultyPage from './Pages/FacultyPage'
import StudentPage from './Pages/StudentPage'
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  const [faculties, setFaculties] = useState([]);
  const [students, setStudents] = useState([]);
  const [facultyToEdit, setFacultyToEdit] = useState(null);
  const [studentToEdit, setStudentToEdit] = useState(null);

  useEffect(() => {
    const storedFaculties = JSON.parse(localStorage.getItem('faculties'));
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedFaculties) {
      setFaculties(storedFaculties);
    }
    if (storedStudents) {
      setStudents(storedStudents);
    }
  }, []);

  const addOrUpdateFaculty = (faculty) => {
    let newFaculties;
    if (facultyToEdit) {
      newFaculties = faculties.map((f) => (f === facultyToEdit ? faculty : f));
      setFacultyToEdit(null);
    } else {
      newFaculties = [...faculties, faculty];
    }
    setFaculties(newFaculties);
    localStorage.setItem('faculties', JSON.stringify(newFaculties));
  };

  const deleteFaculty = (faculty) => {
    const newFaculties = faculties.filter((f) => f !== faculty);
    setFaculties(newFaculties);
    localStorage.setItem('faculties', JSON.stringify(newFaculties));
  };

  const addOrUpdateStudent = (student) => {
    let newStudents;
    if (studentToEdit) {
      newStudents = students.map((s) => (s === studentToEdit ? student : s));
      setStudentToEdit(null);
    } else {
      newStudents = [...students, student];
    }
    setStudents(newStudents);
    localStorage.setItem('students', JSON.stringify(newStudents));
  };

  const deleteStudent = (student) => {
    const newStudents = students.filter((s) => s !== student);
    setStudents(newStudents);
    localStorage.setItem('students', JSON.stringify(newStudents));
  };

  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route
              path="/faculties"
              element={
                <FacultyPage
                  faculties={faculties}
                  addOrUpdateFaculty={addOrUpdateFaculty}
                  deleteFaculty={deleteFaculty}
                  setFacultyToEdit={setFacultyToEdit}
                  facultyToEdit={facultyToEdit}
                />
              }
            />
            <Route
              path="/students"
              element={
                <StudentPage
                  faculties={faculties}
                  students={students}
                  addOrUpdateStudent={addOrUpdateStudent}
                  deleteStudent={deleteStudent}
                  setStudentToEdit={setStudentToEdit}
                  studentToEdit={studentToEdit}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
