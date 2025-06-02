import React from "react";
import ideastolife from "../../assets/videos/ideastolife.mp4";
import ideastolifemobile from "../../assets/videos/ideastolifemobile.mp4";
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
        playsinline
      >
        <source src={ideastolife} type="video/mp4" />
      </video>
      <video
        className="idea-vid-mobile"
        width="100%"
        height="100%"
        loop
        autoPlay
        muted
        playsinline
      >
        <source src={ideastolifemobile} type="video/mp4" />
      </video>
    </div>
  );
};

export default IdeasToLife;
