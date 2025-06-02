import React from "react";
import toppic from "../../assets/images/toppic.jpg";
import toptext from "../../assets/images/toptext.png";
import "./topic.css";

const TopPic = ({ headerRef }) => {
  return (
    <div className="toppic" ref={headerRef}>
      <img className="topimg" src={toppic} alt="" />
      <div className="top-text">
        <img src={toptext} alt="" />
        {/* <h1>
          Animation,
          <br /> set in motion.
        </h1>
        <p>
          We take wild ideas and give them rhythm. From abstract shapes to bold
          narratives at DND, animation is more than a medium, it's a mindset.
        </p> */}
      </div>
    </div>
  );
};

export default TopPic;
