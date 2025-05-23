import React from "react";
import GameConsole from "../assets/images/psp.png";
import DNDLogo from "../assets/images/dnd_logo.png";
import Asterik from "../assets/images/asterik.png";
import "../components/HomeTopSection.css";

const HomeTopSection = () => {
  return (
    <div className="home-top-section">
      <img src={Asterik} alt="Asterisk" className="asterisk" />
      <img src={GameConsole} alt="Game Console" className="game-console" />
      <div className="logo-container">
        <h1 className="dnd-logo">DND</h1>
        <div className="tagline">
          A BRAND DESIGN <br />
          STUDIO.
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;
