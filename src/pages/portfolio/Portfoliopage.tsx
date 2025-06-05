import React from "react";
import portfolioimg from "../../assets/images/portfolioimg.png";
import Footertwo from "../../components/footertwo/Footertow.tsx";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-page">
        <img src={portfolioimg} alt="" />
      </div>
      <Footertwo />
    </>
  );
};

export default Portfolio;
