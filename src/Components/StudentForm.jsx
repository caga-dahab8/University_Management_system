import React, { useState, useEffect } from 'react';

const StudentForm = ({ faculties, addOrUpdateStudent, studentToEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [faculty, setFaculty] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setEmail(studentToEdit.email);
      setAge(studentToEdit.age);
      setFaculty(studentToEdit.faculty);
    } else {
      setName('');
      setEmail('');
      setAge('');
      setFaculty('');
    }
  }, [studentToEdit]);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!age.trim()) newErrors.age = 'Age is required';
    if (!faculty) newErrors.faculty = 'Faculty is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    addOrUpdateStudent({ name, email, age, faculty });
    setName('');
    setEmail('');
    setAge('');
    setFaculty('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{studentToEdit ? 'Edit Student' : 'Register Student'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`mt-1 p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-1 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={`mt-1 p-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Faculty:</label>
        <select
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className={`mt-1 p-2 border ${errors.faculty ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
        >
          <option value="">Select Faculty</option>
          {faculties.map((faculty, index) => (
            <option key={index} value={faculty}>
              {faculty}
            </option>
          ))}
        </select>
        {errors.faculty && <p className="text-red-500 text-sm mt-1">{errors.faculty}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {studentToEdit ? 'Update' : 'Register'}
      </button>
    </form>
  );
};

export default StudentForm;
