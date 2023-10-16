import React, { useState } from 'react';
import Hamburger from 'hamburger-react'; // Import Hamburger component

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="nav_container">
        <div className="logo">Portfolio</div>

        <div className="menu-icon" onClick={toggleMenu}>
          <Hamburger // Use Hamburger component
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
