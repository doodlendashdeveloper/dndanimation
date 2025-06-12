import React from "react";
// import portfolioimg from "../../assets/images/portfolioimg.png";
import Footertwo from "../../components/footertwo/Footertow.tsx";
import portfoliologo from "../../assets/images/portfoliologo.png";
import bluestarik from "../../assets/images/bluestarik.png";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import MagicButton from "../../components/magicbutton/MagicButton.tsx";
import Portfolio from "../../components/portfolio/Portfolio.tsx";
import "./portfoliopage.css";

const Portfoliopage = () => {
  return (
    <div className="portfolio-main">
      <div className="portfolio-page">
        <div className="portfolio-top-section">
          <div className="portfolio-logo-section">
            <img className="port-logo" src={portfoliologo} alt="" />
            <motion.img
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
              }}
              className="port-starik"
              src={bluestarik}
              alt=""
            />
          </div>
          <div className="marquee-section">
            <Marquee>
              <span>
                <img
                  className="marquee-starik"
                  src={bluestarik}
                  alt="starik-img"
                />
                <span className="marquee-text">animated reel</span>
              </span>
              <span>
                <img
                  className="marquee-starik"
                  src={bluestarik}
                  alt="starik-img"
                />
                <span className="marquee-text">typography animation</span>
              </span>
              <span>
                <img
                  className="marquee-starik"
                  src={bluestarik}
                  alt="starik-img"
                />
                <span className="marquee-text">graphics videos</span>
              </span>
            </Marquee>
          </div>
          <div className="port-main-section">
            <h1>WELCOME</h1>
            <h1>
              TO THE <span style={{ color: "#94FF00" }}>DND</span>
            </h1>
            <h3>
              ANIMATION <span style={{ color: "#94FF00" }}>HALL</span> OF{" "}
              <span
                style={{
                  color: "#000000",
                  backgroundColor: "#94FF00",
                  display: "inline-table",
                  paddingRight: "0.7rem",
                  paddingLeft: "0.3rem",
                }}
              >
                WOW
              </span>
            </h3>
          </div>
        </div>
        <div className="port-bottom">
          <div className="port-content">
            <h3>
              HERE OUR WILDEST IDEAS FOUND A HOME,
              <br /> GOT ANIMATED, AND NOW LIVE RENT FREE IN THE MINDS OF
              VIEWERS EVERYWHERE.
            </h3>
            <p>
              From snappy 2D explainer jams to intergalactic
              <br /> 3D adventures, this is where pixels pop, characters sass,
              <br />
              and creativity goes completely off the rails (in the best way
              possible).
              <br /> Buckle up *you're about to witness pure animation chaos...
              with style.
            </p>
            <MagicButton link="/" classname="port-read">
              read More
            </MagicButton>
          </div>
        </div>
        <Portfolio />
        {/* <div className="img-section">
          <img src={portfolioimg} alt="" />
        </div> */}
      </div>
      <Footertwo />
    </div>
  );
};

export default Portfoliopage;
