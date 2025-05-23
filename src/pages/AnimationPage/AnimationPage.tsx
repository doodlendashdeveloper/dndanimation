import React, { useState } from "react";
import CircleImage from "../../assets/images/circles.png";
import "./AnimationPage.css";
import { motion } from "framer-motion";
import OverlayImage from "../../assets/images/jungle.gif";
import ButterflyField from "./ButterflyField.tsx";

const AnimationPage = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="animation-section" onMouseMove={handleMouseMove}>
      <motion.div
        className="circle-image"
        style={{
          backgroundImage: `url(${CircleImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          width: "8000px", // set a fixed width
          height: "8000px", // set a fixed height
        }}
        animate={{
          x: coords.x - 4000, // offset by half the width
          y: coords.y - 4000, // offset by half the height
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
        }}
      />

      <div
        className="fullscreen-overlay"
        style={{
          backgroundImage: `url(${OverlayImage})`,
        }}
      ></div>
      <div className="color-overlay"></div>
    </section>
  );
};

export default AnimationPage;
