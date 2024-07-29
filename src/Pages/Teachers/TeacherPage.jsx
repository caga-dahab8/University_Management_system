import React, { useState } from 'react';

const TeacherPage = ({ teachers, addOrUpdateTeacher, deleteTeacher, setTeacherToEdit, teacherToEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        formErrors[field] = 'This field is required';
      }
    });
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addOrUpdateTeacher(formData);
      setFormData({ name: '', email: '', department: '' });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Teacher Registration</h1>
      <form onSubmit={handleSubmit} noValidate className="mb-8">
        {['name', 'email', 'department'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)} *
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={`w-full p-2 border border-gray-300 rounded ${
                errors[field] ? 'border-red-500' : ''
              }`}
            />
            {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
          </div>
        ))}
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Register
        </button>
      </form>
      <h2 className="text-xl font-bold mb-4">Registered Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.email} className="mb-2 flex justify-between items-center">
            <span>{teacher.name} - {teacher.department}</span>
            <div>
              <button
                onClick={() => setTeacherToEdit(teacher)}
                className="mr-2 p-1 bg-yellow-400 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTeacher(teacher)}
                className="p-1 bg-red-500 text-white rounded"
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

export default TeacherPage;
