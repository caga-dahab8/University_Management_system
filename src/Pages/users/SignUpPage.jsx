import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
// import logo from '../Assets/logo.png'; // Adjust the path to your logo

const SignUpPage = ({ onRegister }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const profilePictureDataURL = profilePicture ? await getDataUrl(profilePicture) : null;

    const newUser = {
      fullName,
      username,
      email,
      password,
      profilePicture: profilePictureDataURL,
    };

    // Store user in localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
    onRegister(newUser);
    navigate('/dashboard');
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const getDataUrl = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded shadow-md p-8">
        <div className="text-center mb-8">
          <img src="https://via.placeholder.com/300" alt="University Logo" className="mx-auto w-20 mb-4" />
          <h1 className="text-2xl font-bold text-green-600">Sign Up</h1>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Profile Picture</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            SIGN UP
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
