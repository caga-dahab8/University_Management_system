// src/Pages/AboutMePage.jsx
import React from 'react';
import myImage from '../Assets/me.jpg'

const AboutMePage = () => {
    return (
      <div className="about-container">
        <div className="about-card">
          <div className="about-image">
            <img src={myImage} alt="My Image" className="profile-image" />
          </div>
          <div className="about-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              Hello! I'm Suleiman Said, a passionate individual dedicated to making a difference. 
              My journey is fueled by a desire to innovate and inspire. Remember, "The only limit 
              to our realization of tomorrow is our doubts of today." Keep pushing forward and 
              never stop believing in your dreams!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMePage;