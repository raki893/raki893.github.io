import React from 'react';
import profileImage from '../images/pn.jpg';


const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="name-title">
          <h1>Md Rakibul Islam</h1>
          <h3>Frontend Developer</h3>
          <div className="cv-resume">
                <a className="btn" href="https://drive.google.com/file/d/1AhgJHdR3ll3sesgppUm9eBmZginvndMX/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
                <a className="btn" href="https://drive.google.com/file/d/1p8f52A1KwV8n9v9umSf-xMnZNH0jVd2q/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
