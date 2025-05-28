import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/Logo.png";
import logoani from "../assets/images/logo_ani.gif";
import MagicButton from "./magicbutton/MagicButton.tsx";
import { motion } from "framer-motion";

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
    <div className="navbar nav-stycky">
      <div className="nav-logo">
        <img src={logoani} alt="not available" className="logo_ani" />
        <img src={logo} alt="WORK Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <motion.li
          variants={blinkvariants}
          initial="start"
          whileHover="animation"
        >
          <Link to="/">Home</Link>
        </motion.li>
        <li>/</li>
        <motion.li
          variants={blinkvariants}
          initial="start"
          whileHover="animation"
        >
          <Link to="/about">About</Link>
        </motion.li>
        <li>/</li>
        <motion.li
          variants={blinkvariants}
          initial="start"
          whileHover="animation"
        >
          <Link to="/Work">Work</Link>
        </motion.li>
        <li>/</li>
        <motion.li
          variants={blinkvariants}
          initial="start"
          whileHover="animation"
        >
          <Link to="/contact">Contact</Link>
        </motion.li>
      </ul>
      <div>
        <div className="container">
          <MagicButton link="tel:7732196748">(773) 219-6748</MagicButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
