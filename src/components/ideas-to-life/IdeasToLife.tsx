import React from "react";
import ideastolife from "../../assets/videos/ideastolife.mp4";
import "./ideastolife.css";

const IdeasToLife = () => {
  return (
    <div className="ideas-to-life">
      <video
        className="idea-vid"
        width="100%"
        height="100%"
        loop
        autoPlay
        muted
      >
        <source src={ideastolife} type="video/mp4" />
      </video>
    </div>
  );
};

export default IdeasToLife;
