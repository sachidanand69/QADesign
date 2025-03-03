import React, { useState } from "react";
import "./Navbar.css";
import Dropdowns from "../Dropdown/Dropdown";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Hamburger Menu for Mobile*/}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/*Navigations menu*/}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="/QADesign/slidefilter">Home</a></li>
          <li className="dropdown">
            <Dropdowns />
          </li>
          <li><a href="#">Membership</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        
        {/* Right Side Profile Logo and Button */}
        <div className="profile-section">
          <img src="./src/assets/Images/profileicon.png" alt="Profile" className="profile-icon" />
          <button className="join-button"><span style={{ fontSize: "20px", fontWeight: "bold", display: "inline-block", width: "32px", height: "32px", textAlign: "center" }}>+</span>
          Join Our Network</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

