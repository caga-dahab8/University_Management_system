import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import logo from '../../Assets/logo.jpg'

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
    <div className="signuppage min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded shadow-md p-8">
        <div className="text-center mb-8">
          <img src={logo} alt="University Logo" className="mx-auto w-20 mb-4" />
          <h1 className="text-2xl font-bold text-green-600">Sign Up</h1>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-sky-400"
              placeholder='Fullname...'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-sky-400"
              placeholder='username...'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-sky-400"
              placeholder='email...'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-purple-500"
              placeholder="**********"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Profile Picture</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border border-sky-300 rounded px-3 py-2 bg-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
