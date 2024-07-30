import React, { useState, useEffect } from 'react';

const StudentForm = ({ faculties, addOrUpdateStudent, studentToEdit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [faculty, setFaculty] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (studentToEdit) {
      setFirstName(studentToEdit.firstName);
      setLastName(studentToEdit.lastName);
      setEmail(studentToEdit.email);
      setAddress(studentToEdit.address);
      setDob(studentToEdit.dob);
      setPhone(studentToEdit.phone);
      setFaculty(studentToEdit.faculty);
    } else {
      resetForm();
    }
  }, [studentToEdit]);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setDob('');
    setPhone('');
    setFaculty('');
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!address.trim()) newErrors.address = 'Address is required';
    if (!dob.trim()) newErrors.dob = 'Date of birth is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
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

    // Generate student ID starting with SK if not editing
    const studentData = {
      id: studentToEdit ? studentToEdit.id : `SK${String(Date.now()).slice(-6)}`,
      firstName,
      lastName,
      email,
      address,
      dob,
      phone,
      faculty,
    };
    addOrUpdateStudent(studentData);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md stdform">
      <h2 className="text-2xl font-bold mb-4">{studentToEdit ? 'Edit Student' : 'Register Student'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-900">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`mt-1 p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`mt-1 p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`mt-1 p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className={`mt-1 p-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`mt-1 p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-4">
        <label className="block text-gray-900">Faculty:</label>
        <select
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className={`mt-1 p-2 border ${errors.faculty ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
        >
          <option value="">Select Faculty</option>
          {faculties.map((faculty) => (
            <option key={faculty.id} value={faculty.name}>
              {faculty.name}
            </option>
          ))}
        </select>
        {errors.faculty && <p className="text-red-500 text-sm mt-1">{errors.faculty}</p>}
      </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {studentToEdit ? 'Update' : 'Register'}
      </button>
    </form>
  );
};

export default StudentForm;
