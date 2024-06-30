// NavBar.js
import React from 'react';
import styles from "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      <hr className="line" />
    </div>
  );
}

export default NavBar;
