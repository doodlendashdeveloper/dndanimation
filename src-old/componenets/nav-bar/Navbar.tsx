import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/Logo.png"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="dnd-animations-logo"  />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
