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
          <h3>Software Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
