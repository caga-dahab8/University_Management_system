import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FacultyPage from './Pages/Faculty/FacultyPage';
import StudentPage from './Pages/Students/StudentPage';
import LoginPage from './Pages/Login/LoginPage';
import SignUpPage from './Pages/users/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import ProtectedRoute from './Components/ProtectedRoute';
import Layout from './Components/Layout/Layout';

const App = () => {
  const [faculties, setFaculties] = useState([]);
  const [students, setStudents] = useState([]);
  const [facultyToEdit, setFacultyToEdit] = useState(null);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
                <DashboardPage students={students} faculties={faculties} />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/faculties"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
                <FacultyPage
                  faculties={faculties}
                  addOrUpdateFaculty={addOrUpdateFaculty}
                  deleteFaculty={deleteFaculty}
                  setFacultyToEdit={setFacultyToEdit}
                  facultyToEdit={facultyToEdit}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
                <StudentPage
                  faculties={faculties}
                  students={students}
                  addOrUpdateStudent={addOrUpdateStudent}
                  deleteStudent={deleteStudent}
                  setStudentToEdit={setStudentToEdit}
                  studentToEdit={studentToEdit}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;