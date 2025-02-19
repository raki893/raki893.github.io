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
                <a className="btn-cv-resume" href="https://drive.google.com/file/d/1d5wD8qSLN2OpivxNqOrcNDVpPQLEeFWK/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;