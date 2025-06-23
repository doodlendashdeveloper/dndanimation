import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/Logo.png";
import logoani from "../assets/images/logo_ani.gif";
import MagicButton from "./magicbutton/MagicButton.tsx";
// import { motion } from "framer-motion";
import SideBar from "./sidebar/SideBar.tsx";
// import AboutUs from "../pages/aboutus/AboutUs.tsx";
import Home from "../pages/Home.tsx";
import ActiveIndicator from "../components/ActiveIndicator.tsx";

const Navbar: React.FC = () => {
  // const blinkvariants = {
  //   start: { opacity: 1 },
  //   animation: {
  //     opacity: [0, 1, 0, 1],
  //     transition: {
  //       duration: 0.3,
  //       ease: "easeIn",
  //     },
  //   },
  // };

  return (
    <div className="navbar nav-sticky">
      <div className="nav-logo">
        <NavLink to="/" element={<Home />}>
          <img src={logoani} alt="not available" className="logo_ani" />
          <img src={logo} alt="WORK Logo" className="logo" />
        </NavLink>
      </div>

      <ul className="navbar-links">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/portfolio", label: "Portfolio" },
          { to: "/contact", label: "Contact" },
        ].map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "active nav-item" : "nav-item"
              }
            >
              {({ isActive }) => (
                <>
                  <span className="slash">/</span>
                  {isActive && <ActiveIndicator />}
                  {item.label}
                </>
              )}
            </NavLink>
          </li>
        ))}
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
