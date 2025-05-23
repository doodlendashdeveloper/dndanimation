import React from "react";
import "../components/Banner.css";
import DiceLeft from "../assets/images/dice_left.png";
import DiceRight from "../assets/images/dice_right.png";
import Splash from "../assets/images/splash.png";

const Banner = ({}) => {
  return (
    <div className="banner-text-wrapper">
      {/* <div className="banner-text">BUILD</div> */}
      <img src={Splash} className="build-image" />
      <div className="text-wrapper">
        <div className="first-line">
          <div className="banner-text1">YOUR NEXT</div>
          <p className="banner-text2">
            LEVEL <br /> AMAZING
          </p>
        </div>

        <div className="banner-text3">ANIMATION</div>
      </div>
      <img src={DiceLeft} alt="dice" className="dice-left" />
      <div className="dice-right-wrapper">
        <img src={DiceRight} alt="dice" className="dice-right" />
      </div>{" "}
    </div>
  );
};

export default Banner;
