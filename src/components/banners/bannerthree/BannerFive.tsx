import React from "react";
import "./bannerfive.css";
import scene2 from "../../../assets/videos/scene2.mp4";

const BannerFive = () => {
  return (
    <div className="bannerfive">
      <video className="scene2" width="100%" height="100%" loop autoPlay muted>
        <source src={scene2} type="video/mp4" />
      </video>
    </div>
  );
};

export default BannerFive;
