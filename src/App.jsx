import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FacultyPage from "./Pages/Faculty/FacultyPage";
import StudentPage from "./Pages/Students/StudentPage";
import AttendancePage from "./Pages/Attendance/AttendancePage";
import TeacherPage from "./Pages/Teachers/TeacherPage";
import LoginPage from "./Pages/Login/LoginPage";
import SignUpPage from "./Pages/users/SignUpPage";
import DashboardPage from "./Pages/DashboardPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Layout from "./Components/Layout/Layout";

const App = () => {
  const [faculties, setFaculties] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [facultyToEdit, setFacultyToEdit] = useState(null);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [teacherToEdit, setTeacherToEdit] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedFaculties = JSON.parse(localStorage.getItem("faculties"));
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    const storedTeachers = JSON.parse(localStorage.getItem("teachers"));
    const storedAttendance = JSON.parse(localStorage.getItem("attendance"));
    if (storedFaculties) setFaculties(storedFaculties);
    if (storedStudents) setStudents(storedStudents);
    if (storedTeachers) setTeachers(storedTeachers);
    if (storedAttendance) setAttendance(storedAttendance);
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
    localStorage.setItem("faculties", JSON.stringify(newFaculties));
  };

  const deleteFaculty = (faculty) => {
    const newFaculties = faculties.filter((f) => f !== faculty);
    setFaculties(newFaculties);
    localStorage.setItem("faculties", JSON.stringify(newFaculties));
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
    localStorage.setItem("students", JSON.stringify(newStudents));
  };

  const deleteStudent = (student) => {
    const newStudents = students.filter((s) => s !== student);
    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  };

  const addOrUpdateTeacher = (teacher) => {
    let newTeachers;
    if (teacherToEdit) {
      newTeachers = teachers.map((t) => (t === teacherToEdit ? teacher : t));
      setTeacherToEdit(null);
    } else {
      newTeachers = [...teachers, teacher];
    }
    setTeachers(newTeachers);
    localStorage.setItem("teachers", JSON.stringify(newTeachers));
  };

  const deleteTeacher = (teacher) => {
    const newTeachers = teachers.filter((t) => t !== teacher);
    setTeachers(newTeachers);
    localStorage.setItem("teachers", JSON.stringify(newTeachers));
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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
                <DashboardPage
                  students={students}
                  faculties={faculties}
                  teachers={teachers}
                />
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
        <Route
          path="/teachers"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
                <TeacherPage
                  teachers={teachers}
                  addOrUpdateTeacher={addOrUpdateTeacher}
                  deleteTeacher={deleteTeacher}
                  setTeacherToEdit={setTeacherToEdit}
                  teacherToEdit={teacherToEdit}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
                <AttendancePage
                  students={students}
                  attendance={attendance}
                  setAttendance={setAttendance}
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
