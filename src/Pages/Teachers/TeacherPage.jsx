import React, { useState } from 'react';
import TeacherForm from "../../Components/Teachers/TeacherForm";
import TeacherTable from "../../Components/Teachers/TeacherTable";

const TeacherPage = ({
  faculties,
  teachers,
  addOrUpdateTeacher,
  deleteTeacher,
  setTeacherToEdit,
  teacherToEdit,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Teacherpage container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Teacher Registration</h1>
      <TeacherForm
        faculties={faculties}
        addOrUpdateTeacher={addOrUpdateTeacher}
        teacherToEdit={teacherToEdit}
      />
      <div className="mb-4 mt-6 flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded w-full"
        />
        <svg
          className="w-6 h-6 ml-2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.5a7.5 7.5 0 010 10.65z"
          ></path>
        </svg>
      </div>
      <TeacherTable
        teachers={filteredTeachers}
        deleteTeacher={deleteTeacher}
        setTeacherToEdit={setTeacherToEdit}
      />
    </div>
  );
};

export default TeacherPage;
