import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../Assets/login.jpg'
import logo from '../../Assets/logo.jpg'

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
            src={login}
            alt="Phone Mockup"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-8">
            <img src={logo} alt="University Logo" className="mx-auto w-20 mb-4" />
            <h1 className="text-2xl font-bold text-green-600">SK University Login</h1>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-sky-300"
                placeholder="Username"
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
                placeholder="***************"
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
