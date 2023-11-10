import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'; // Import Link and scroll from react-scroll
import Hamburger from 'hamburger-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="nav_container">
        <div className="logo" onClick={scrollToTop}>
          Portfolio
        </div>

        <div className="menu-icon">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {/* Use Link instead of a for smooth scrolling */}
          <li>
            <Link to="header" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects-section" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
