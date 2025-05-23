import React, { useRef, useEffect, useState } from "react";
import DiceLeft from "../../../assets/images/dice_left.png";
import DiceRight from "../../../assets/images/dice_right.png";
import Splash from "../../../assets/images/splash.png";
import "./Banner.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import gsap from "gsap";

const Banner = () => {
  const constraintsRef = useRef(null);

  // Motion values for x, y, and rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Generate rotation from x and y
  const rotate = useTransform([x, y], ([latestX, latestY]) => {
    return (latestX + latestY) * 0.3; // tweak multiplier for feel
  });

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (constraintsRef.current) {
      const rect = constraintsRef.current.getBoundingClientRect();
      if (rect.height > 0 && rect.width > 0) {
        setReady(true);
      }
    }
  }, []);

  // useEffect(() => {
  //   gsap.to(".dice-right", {
  //     x: "380%",
  //     y: "200%",
  //     rotate: "360deg",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".dice-right",
  //       start: "top 50%",
  //       end: "top top",
  //       scrub: 3,
  //       // markers: true, // optional: remove in production
  //     },
  //   });
  // }, []);

  return (
    <motion.div ref={constraintsRef} className="banner-text-wrapper">
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

      {ready && (
        <motion.img
          whileTap={{ scale: 0.95 }}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.4}
          dragTransition={{
            power: 0.9,
            timeConstant: 1500,
            bounceDamping: 15,
            bounceStiffness: 60,
          }}
          style={{
            x,
            y,
            rotate,
            touchAction: "none",
            cursor: "grab",
          }}
          src={DiceRight}
          alt="dice"
          className="dice-right"
        />
      )}
    </motion.div>
  );
};

export default Banner;
