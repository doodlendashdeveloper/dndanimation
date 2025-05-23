import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/Logo.png";
import logoani from "../assets/images/logo_ani.gif";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logoani} alt="not available" className="logo_ani" />
        <img src={logo} alt="WORK Logo" className="logo" />
      </div>
      {/* <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
