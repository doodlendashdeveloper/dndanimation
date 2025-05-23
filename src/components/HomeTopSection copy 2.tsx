import React from "react";
import GameConsole from "../assets/images/psp.png";
import Character from "../assets/images/character.png";
import Cricle from "../assets/images/circle.png";
import "../components/HomeTopSection.css";

const HomeTopSection = () => {
 
  return (
    <div className="home-top-section">
      <img src={Cricle} alt="Spiral" className="circle" />
      <img src={Character} alt="Character" className="character" />
    </div>
  );
};

export default HomeTopSection;
