import React, { useState, useEffect } from 'react';

const FacultyForm = ({ addOrUpdateFaculty, facultyToEdit }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (facultyToEdit) {
      setName(facultyToEdit.name);
    } else {
      setName('');
    }
  }, [facultyToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Faculty name is required');
      return;
    }
    addOrUpdateFaculty({ id: Date.now(), name });
    setName('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md fform">
      <h2 className="text-2xl font-bold mb-4">{facultyToEdit ? 'Edit Faculty' : 'Register Faculty'}</h2>
      <div className="mb-4">
        <label className="block text-gray-900">Faculty Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`mt-1 p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {facultyToEdit ? 'Update' : 'Register'}
      </button>
    </form>
  );
};

export default FacultyForm;
