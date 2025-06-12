import React from "react";
// import aboutus from "../../assets/images/aboutus.png";
import Footertwo from "../../components/footertwo/Footertow.tsx";
import ele from "../../assets/images/ele.png";
import blue from "../../assets/images/blue.png";
import purple from "../../assets/images/purple.png";
import topright from "../../assets/images/topright.png";
import logoani from "../../assets/images/logo_ani.gif";
import logo from "../../assets/images/Logo.png";
import greenstar from "../../assets/images/greenstar.png";
import yellowstar from "../../assets/images/yellowstar.png";
import { motion } from "framer-motion";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      {/* <div className="about-page">
        <img src={aboutus} alt="" />
      </div> */}
      <div className="about-top">
        <motion.img
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="yellowstar"
          src={yellowstar}
          alt="yellow star"
        />
        <motion.img
          initial={{
            rotate: 360,
          }}
          animate={{
            rotate: 0,
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="greenstar"
          src={greenstar}
          alt="green star"
        />
        <img className="top-right-pic" src={topright} alt="top-right" />
        <div className="about-logo-sec">
          <div className="about-logo-inner">
            <h1>Welcome to</h1>
            <div className="about-logo-col">
              <img
                src={logoani}
                alt="not available"
                className="about-logo-ani"
              />
              <img src={logo} alt="WORK Logo" className="about-logo" />
            </div>
          </div>
          <div className="pixel-party">
            <h1>
              where pixels party, ideas dance,
              <br /> and imagination never hits pause.
            </h1>
            <p>
              We're not just animators. We're visual wizards, motion magicians,
              and storytelling ninjas who turn wild ideas into animated gold.
              From quirky explainer videos to mind-blowing 3D worlds, if it
              moves - we probably made it groove.
            </p>
          </div>
          <div className="who-are-we">
            <h1>Who Are We?</h1>
            <p>
              A team of artists, geeks, dreamers, and caffeine-fueled night owls
              ho live and breathe animation. We started DND Animation with one
              goal: make boring things awesome. Whether it's a product pitch or
              a cartoon unicorn battle (yes, we've done that)
              <br />
              <br /> we bring serious energy to every frame.
            </p>
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <div className="whatwedo">
          <h1>
            What we <span>do</span>
          </h1>
        </div>
        <div className="bottom-content">
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="blue"
            src={blue}
            alt="blue"
          />
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: 1.4 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="purple"
            src={purple}
            alt="purple"
          />
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ele"
            src={ele}
            alt="ele"
          />
          <div className="content-first-row">
            <div className="our-mission">
              <div className="mission-content">
                <h1>Our Mission</h1>
                <h3>
                  To make the world a little cooler,
                  <br /> one{" "}
                  <strong>
                    <i>animated story</i>
                  </strong>{" "}
                  at a time.
                </h3>
              </div>
            </div>
            <div className="we-create">
              <div className="we-create-content">
                <h1>We create</h1>
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
          <div className="content-second-row">
            <div className="we-rock">
              <div className="we-rock-content">
                <h1>why we rock</h1>
                <h3>
                  We don't do dull*
                  <i>
                    <strong>every project pops</strong>
                  </i>{" "}
                  with personality
                  <br /> We listen like besties*your vision is sacred
                  <br /> We deliver like ninjas*on time, on point, no drama
                  <br /> We love weird*
                  <i>
                    <strong>got a crazy idea?</strong>
                  </i>{" "}
                  Even better.
                </h3>
              </div>
            </div>
            <div className="story">
              <div className="story-content">
                <h3>
                  Let us turn your "
                  <i>
                    <strong>meh</strong>
                  </i>
                  "
                  <i>
                    <strong>into </strong>
                  </i>
                  "heck yeah!"
                </h3>
                <h1>DND ANIMATION YOUR STORY,</h1>
                <h3 className="but">but with way more sparkle.</h3>
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
