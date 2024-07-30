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
import ViewAttendancePage from "./Pages/Attendance/ViewAttendancePage";
import TeacherPage from "./Pages/Teachers/TeacherPage";
import DashboardPage from "./Pages/DashboardPage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Layout from "./Components/Layout/Layout";
import SignUpPage from "./Pages/Users/SignUpPage"
import SignInPage from "./Pages/Users/SignInPage"


const App = () => {
  const [faculties, setFaculties] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [facultyToEdit, setFacultyToEdit] = useState(null);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [teacherToEdit, setTeacherToEdit] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedFaculties = JSON.parse(localStorage.getItem("faculties"));
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    const storedTeachers = JSON.parse(localStorage.getItem("teachers"));
    const storedAttendance = JSON.parse(localStorage.getItem("attendance"));
    if (storedFaculties) setFaculties(storedFaculties);
    if (storedStudents) setStudents(storedStudents);
    if (storedTeachers) setTeachers(storedTeachers);
    if (storedAttendance) setAttendance(storedAttendance);

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setCurrentUser(storedUser);
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

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const handleRegister = (newUser) => {
    // Store the user in localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
    setCurrentUser(newUser);
  };

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage onRegister={handleRegister} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout
                onLogout={handleLogout}
                username={currentUser?.username}
                profilePicture={currentUser?.profilePicture}
              >
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
              <Layout
                onLogout={handleLogout}
                username={currentUser?.username}
                profilePicture={currentUser?.profilePicture}
              >
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
              <Layout
                onLogout={handleLogout}
                username={currentUser?.username}
                profilePicture={currentUser?.profilePicture}
              >
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
              <Layout
                onLogout={handleLogout}
                username={currentUser?.username}
                profilePicture={currentUser?.profilePicture}
              >
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
              <Layout
                onLogout={handleLogout}
                username={currentUser?.username}
                profilePicture={currentUser?.profilePicture}
              >
                <AttendancePage
                  students={students}
                  attendance={attendance}
                  setAttendance={setAttendance}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
};

export default App;
