import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-line"></div>
          <h2 className="contact-title">Build your next amazing animation</h2>
          <p className="contact-description">
            CREATIVE MINIMAL WORDPRESS THEME SUITABLE FOR AGENCIES, FREELANCERS,
            ARCHITECTS, DESIGNERS AND OTHER CREATIVE PEOPLE WHO WANT TO SHOWCASE
            THEIR PORTFOLIO IN A SPECTACULAR MODERN WAY.
          </p>
          <a href="#" className="contact-button">
            CONTACT NOW <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
