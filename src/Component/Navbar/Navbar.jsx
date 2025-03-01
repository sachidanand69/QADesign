import React, { useState } from "react";
import "./Navbar.css";
import Dropdowns from "../Dropdown/Dropdown";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Hamburger Menu (for mobile) */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Centered Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li className="dropdown">
            <Dropdowns />
          </li>
          <li><a href="#">Membership</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        
        {/* Right Side Profile Logo and Button */}
        <div className="profile-section">
          <img src="/profile-icon.png" alt="Profile" className="profile-icon" />
          <button className="join-button">Join Our Network</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

