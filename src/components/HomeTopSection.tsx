import React from "react";
import "../components/HomeTopSection.css";

const HomeTopSection = ({ image }) => {
  return (
    <div className="home-top-section">
      <video src={image} className="welcome" playsInline muted autoPlay loop />
    </div>
  );
};

export default HomeTopSection;
