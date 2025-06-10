import React from "react";
import aboutus from "../../assets/images/aboutus.png";
import Footertwo from "../../components/footertwo/Footertow.tsx";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-page">
        <img src={aboutus} alt="" />
      </div>
      <div className="about-bottom">
        <div className="whatwedo">
          <h1>
            What we <span>do</span>
          </h1>
        </div>
        <div className="bottom-content">
          <div className="content-first-row">
            <div className="our-mission">
              <div className="mission-content">
                <h1>Our Mission</h1>
                <h3>
                  To make the world a little cooler, one animated story at a
                  time.
                </h3>
              </div>
            </div>
            <div className="we-create">
              <div className="we-create-content">
                <h1>we create</h1>
                <h3>
                  2D & 3D Animations * smooth, stylish, or just plain silly
                  Explainer Videos * explain like Einstein, look like Pixar
                  Motion Graphics* your brand, but with way more attitude
                  Character Design * custom weirdos, heroes, creatures, you name
                  it Visual Stories * if it needs a plot and a punch, we got you
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footertwo />
    </>
  );
};

export default AboutUs;
