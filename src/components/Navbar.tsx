import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/Logo.png";
import logoani from "../assets/images/logo_ani.gif";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const btnRef = useRef(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPos({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPos({ x, y });
    setIsHovering(false);
  };

  return (
    <nav className="navbar nav-stycky" id="up">
      <div className="nav-logo">
        <img src={logoani} alt="not available" className="logo_ani" />
        <img src={logo} alt="WORK Logo" className="logo" />
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
      {/* <button
        ref={btnRef}
        className="fancy-btn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.span
              className="hover-effect"
              initial={{
                top: hoverPos.y,
                left: hoverPos.x,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                scale: 8,
                opacity: 1,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              exit={{
                top: hoverPos.y,
                left: hoverPos.x,
                scale: 0,
                opacity: 0,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            />
          )}
        </AnimatePresence>
        <span className="btn-text">Click Me</span>
      </button> */}
    </nav>
  );
};

export default Navbar;
