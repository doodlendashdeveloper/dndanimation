import React, { useEffect } from "react";
import DiceLeft from "../../../assets/images/dice_left.png";
import DiceRight from "../../../assets/images/dice_right.png";
import Splash from "../../../assets/images/splash.png";
import "./Banner.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = ({}) => {
  useEffect(() => {
    gsap.to(".dice-right", {
      x: "380%",
      y: "200%",
      rotate: "360deg",
      ease: "none",
      scrollTrigger: {
        trigger: ".dice-right",
        start: "top 50%",
        end: "top top",
        scrub: 3,
        // markers: true, // optional: remove in production
      },
    });
  }, []);

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
      </div>
    </div>
  );
};

export default Banner;
