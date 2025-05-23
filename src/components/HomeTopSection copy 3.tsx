import React from "react";
import GameConsole from "../assets/images/psp.png";
import Character from "../assets/images/character.png";
import Cricle from "../assets/images/circle.png";
import "../components/HomeTopSection.css";

const HomeTopSection = () => {
  return (
    <div className="home-top-section">
      <div className="aura-wrapper">
        <div className="aura aura-1"></div>
        <div className="aura aura-2"></div>
        <div className="aura aura-3"></div>
        <img src={Character} alt="Character" className="character" />
      </div>
    </div>
  );
};

export default HomeTopSection;
