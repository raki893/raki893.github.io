import React from 'react';
import profileImage from '../images/pn.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="conatiner">
      <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="name-title">
          
          <h1>Md Rakibul Islam</h1>
          <h3>Frontend Developer</h3>
        </div>

        
      </div>

    </div>
  );
};

export default Header;