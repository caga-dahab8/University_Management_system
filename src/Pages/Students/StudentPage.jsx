import React from 'react';
import StudentForm from '../../Components/Student/StudentForm';
import StudentTable from '../../Components/Student/StudentTable';

const StudentPage = ({ faculties, students, addOrUpdateStudent, deleteStudent, setStudentToEdit, studentToEdit }) => {
  return (
    
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Student Registration</h1>
      <StudentForm
        faculties={faculties}
        addOrUpdateStudent={addOrUpdateStudent}
        studentToEdit={studentToEdit}
      />
      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        setStudentToEdit={setStudentToEdit}
      />
    </div>
  );
};

export default StudentPage;
