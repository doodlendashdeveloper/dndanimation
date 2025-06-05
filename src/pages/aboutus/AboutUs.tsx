import React from "react";
import aboutus from "../../assets/images/aboutus.png";
import Footertwo from "../../components/footertwo/Footertow.tsx";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-page">
        <img src={aboutus} alt="" />
      </div>
      <Footertwo />
    </>
  );
};

export default AboutUs;
