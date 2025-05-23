import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <p className="copyright">
            © 2025 DND ANIMATION. ALL RIGHTS RESERVED.
          </p>
          <address className="address">
            SHANGHAIALLE 19
            <br />
            02000 HAMBURG, GERMANY
          </address>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>HOW IT WORK</li>
            <li>OUR BLOG</li>
          </ul>
          <ul>
            <li>SERVICE</li>
            <li>CHOOSE NOW</li>
            <li>COLLECTION</li>
          </ul>
          <ul>
            <li>INSTAGRAM</li>
            <li>FACEBOOK</li>
            <li>TWITTER</li>
            <li>LINKED</li>
          </ul>
        </div>
      </div>

      <div className="cylinder-rotate-wrapper">
        <div className="cylinder-text-stack">
          <div className="cylinder-layer top-text">
            <span className="letter delay-0">D</span>
            <span className="letter delay-1">N</span>
            <span className="letter delay-2">D</span>
          </div>
          <div className="cylinder-layer bottom-text">
            <span className="letter delay-0">D</span>
            <span className="letter delay-1">N</span>
            <span className="letter delay-2">D</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
