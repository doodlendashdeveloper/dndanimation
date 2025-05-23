import React from "react";
import "./bannerfive.css";
import theguns from "../../../assets/videos/the-guns.mp4";

const BannerFive = () => {
  return (
    <div className="bannerfive">
      <video className="scene2" width="100%" height="100%" loop autoPlay muted>
        <source src={theguns} type="video/mp4" />
      </video>
    </div>
  );
};

export default BannerFive;
