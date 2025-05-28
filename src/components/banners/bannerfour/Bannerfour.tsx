import React from "react";
import "./bannerfour.css";
import springy from "../../../assets/videos/springy.mp4";
import MagicButton from "../../magicbutton/MagicButton.tsx";

const Bannerfour = () => {
  return (
    <div className="bannerfour">
      <video className="springy" width="100%" height="100%" loop autoPlay muted>
        <source src={springy} type="video/mp4" />
      </video>
      <div className="cta-buttons">
        <MagicButton link="/">get a quote</MagicButton>
        <MagicButton link="tel:7732196748">(773) 219-6748</MagicButton>
      </div>
    </div>
  );
};

export default Bannerfour;
