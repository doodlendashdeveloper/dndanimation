import React from "react";
import "./ContactUs.css";
import MagicButton from "../../components/magicbutton/MagicButton.tsx";

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
          <MagicButton link="#">CONTACT NOW</MagicButton>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
