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
            We bring ideas to life through high-impact animation. From explainer
            videos to motion graphics, we craft visual stories that captivate,
            engage, and inspire. Whether you're a brand, startup, or creative
            agency — we animate your message with clarity and style.
          </p>
          <MagicButton classname="contact-btn" link="/contact">
            CONTACT NOW
          </MagicButton>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
