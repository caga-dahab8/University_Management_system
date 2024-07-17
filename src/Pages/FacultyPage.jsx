import React from 'react';
// import FacultyForm from '../components/FacultyForm';
import FacultyForm from '../Components/FacultyForm'

const FacultyPage = ({ faculties, addOrUpdateFaculty, deleteFaculty, setFacultyToEdit, facultyToEdit }) => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Faculty Registration</h1>
      <FacultyForm addOrUpdateFaculty={addOrUpdateFaculty} facultyToEdit={facultyToEdit} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Registered Faculties</h2>
      <ul className="list-disc ml-5">
        {faculties.map((faculty, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span>{faculty}</span>
            <div>
              <button
                onClick={() => setFacultyToEdit(faculty)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteFaculty(faculty)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyPage;
