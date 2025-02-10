import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import { useNavigate } from "react-router-dom"; // For navigation
import logo from "../components/Img/Navbar-logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      {/* Hamburger Menu Icon (for mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Middle: Menu (ul & li) and Right Side: Icons */}
      <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Portfolio">Portfolio</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>

        {/* Icons Section */}
        <div className="nav-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;