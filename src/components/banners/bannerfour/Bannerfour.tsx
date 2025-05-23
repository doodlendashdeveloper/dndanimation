import React from "react";
import "./bannerfour.css";
import springy from "../../../assets/videos/springy.mp4";

const Bannerfour = () => {
  return (
    <div className="bannerfour">
      <video className="springy" width="100%" height="100%" loop autoPlay muted>
        <source src={springy} type="video/mp4" />
      </video>
    </div>
  );
};

export default Bannerfour;
