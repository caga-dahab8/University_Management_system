import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StudentForm from '../../Components/Student/StudentForm';
import StudentTable from '../../Components/Student/StudentTable';

const StudentPage = ({
  faculties,
  students,
  addOrUpdateStudent,
  deleteStudent,
  setStudentToEdit,
  studentToEdit,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.studentToEdit) {
      setStudentToEdit(location.state.studentToEdit);
    }
  }, [location.state, setStudentToEdit]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Student Registration</h1>
      <StudentForm
        faculties={faculties}
        addOrUpdateStudent={addOrUpdateStudent}
        studentToEdit={studentToEdit}
      />
    </div>
  );
};

export default StudentPage;
