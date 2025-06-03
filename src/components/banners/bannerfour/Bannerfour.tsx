import React from "react";
import "./bannerfour.css";
import springy from "../../../assets/videos/springy.mp4";
import springymobile from "../../../assets/videos/springymobile.mp4";
import MagicButton from "../../magicbutton/MagicButton.tsx";

const Bannerfour = () => {
  return (
    <div className="bannerfour">
      <video className="springy" width="100%" height="100%" loop autoPlay muted>
        <source src={springy} type="video/mp4" />
      </video>
      <video
        className="springy-mobile"
        width="100%"
        height="100%"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      >
        <source src={springymobile} type="video/mp4" />
      </video>
      <div className="cta-buttons">
        <MagicButton classname="motion-btn" link="/">
          get a quote
        </MagicButton>
        <MagicButton classname="motion-btn" link="tel:7732196748">
          (773) 219-6748
        </MagicButton>
      </div>
    </div>
  );
};

export default Bannerfour;
