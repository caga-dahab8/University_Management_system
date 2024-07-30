import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../Assets/logo.png'; // Adjust the path to your logo

const SignInPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setError('');
      onLogin(storedUser);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded shadow-md">
        <div className="hidden md:block w-1/2">
          <img
            src="https://via.placeholder.com/300"
            alt="Phone Mockup"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-8">
            <img src="https://via.placeholder.com/300" alt="University Logo" className="mx-auto w-20 mb-4" />
            <h1 className="text-2xl font-bold text-green-600">MyJUST Login</h1>
          </div>
          <form onSubmit={handleSignIn}>
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
              <label className="block mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              SIGN IN
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
