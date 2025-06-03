import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "../assets/images/Logo.png";
import logoani from "../assets/images/logo_ani.gif";
import MagicButton from "./magicbutton/MagicButton.tsx";
import { motion } from "framer-motion";
import SideBar from "./sidebar/SideBar.tsx";

const Navbar: React.FC = () => {
  const blinkvariants = {
    start: { opacity: 1 },
    animation: {
      opacity: [0, 1, 0, 1],
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="navbar nav-sticky">
      <div className="nav-logo">
        <a href="/">
          <img src={logoani} alt="not available" className="logo_ani" />
          <img src={logo} alt="WORK Logo" className="logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <motion.li
          variants={blinkvariants}
          initial="start"
          whileHover="animation"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </motion.li>
        <li>/</li>
        <motion.li
          variants={blinkvariants}
          initial="start"
          whileHover="animation"
        >
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </motion.li>
        <li>/</li>
        <motion.li
          variants={blinkvariants}
          initial="start"
          whileHover="animation"
        >
          <NavLink
            to="/Work"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Work
          </NavLink>
        </motion.li>
        <li>/</li>
        <motion.li
          variants={blinkvariants}
          initial="start"
          whileHover="animation"
        >
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </motion.li>
      </ul>

      <div className="container">
        <MagicButton classname="menu-tel" link="tel:7732196748">
          (773) 219-6748
        </MagicButton>
      </div>
      <SideBar />
    </div>
  );
};

export default Navbar;
