import React from 'react';
import profileImage from '../images/pn.png';


const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="name-title">
          <h1>Hi, I am Rakibul Islam</h1>
          <h3>Frontend Developer</h3>
          <div className="cv-resume">
                <a className="btn-cv-resume" href="https://drive.google.com/file/d/1IDs7cAXCHVWTQFvH3pq6GnPZON37zB1a/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
                <a className="btn-cv-resume" href="https://drive.google.com/file/d/1O640r3fxKboFLRHTd3eytGMME4TtpVZp/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
