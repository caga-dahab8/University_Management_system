import React from 'react';

const Header = ({ onToggleSidebar, username, profilePicture }) => {
  return (
    <header className="header flex justify-between items-center p-4 bg-primary-color text-text-color">
      <button
        onClick={onToggleSidebar}
        className="text-xl p-2 rounded hover:bg-secondary-color"
      >
        &#9776;
      </button>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded bg-secondary-color text-text-color-dark focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        {profilePicture && (
          <img
            src={profilePicture}
            alt="User"
            className="rounded-full w-10 h-10 mr-2"
          />
        )}
        <span className="mr-4">{username}</span>
        <button
          onClick={onToggleSidebar}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
