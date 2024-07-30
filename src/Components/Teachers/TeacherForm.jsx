import React, { useState, useEffect } from 'react';

const TeacherForm = ({ faculties = [], addOrUpdateTeacher, teacherToEdit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [degree, setDegree] = useState('');
  const [faculty, setFaculty] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (teacherToEdit) {
      setFullName(teacherToEdit.fullName);
      setEmail(teacherToEdit.email);
      setPhone(teacherToEdit.phone);
      setDegree(teacherToEdit.degree);
      setFaculty(teacherToEdit.faculty);
    } else {
      setFullName('');
      setEmail('');
      setPhone('');
      setDegree('');
      setFaculty('');
    }
  }, [teacherToEdit]);

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!phone.trim()) newErrors.phone = 'Phone is required';
    if (!degree.trim()) newErrors.degree = 'Degree is required';
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
    addOrUpdateTeacher({ fullName, email, phone, degree, faculty });
    setFullName('');
    setEmail('');
    setPhone('');
    setDegree('');
    setFaculty('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md tform">
      <h2 className="text-2xl font-bold mb-4">{teacherToEdit ? 'Edit Teacher' : 'Register Teacher'}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700">Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`mt-1 p-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
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
          <label className="block text-gray-700">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`mt-1 p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Degree:</label>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className={`mt-1 p-2 border ${errors.degree ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Faculty:</label>
          <select
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            className={`mt-1 p-2 border ${errors.faculty ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          >
            <option value="">Select Faculty</option>
            {faculties.length > 0 &&
              faculties.map((faculty, index) => (
                <option key={index} value={faculty.name}>
                  {faculty.name}
                </option>
              ))}
          </select>
          {errors.faculty && <p className="text-red-500 text-sm mt-1">{errors.faculty}</p>}
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {teacherToEdit ? 'Update' : 'Register'}
      </button>
    </form>
  );
};

export default TeacherForm;
