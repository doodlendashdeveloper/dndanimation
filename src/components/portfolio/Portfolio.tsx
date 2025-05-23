import React, { useEffect, useRef } from "react";
import "./portfolio.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import socialm1 from "../../assets/images/socialmedia1.png";
import degitalart from "../../assets/images/degitalart.png";
import portfolio2025 from "../../assets/images/portfolio2025.png";
import portfolio from "../../assets/images/portfolio.png";
import logo2 from "../../assets/images/logo2.png";
import adcampaign from "../../assets/images/adcampaign.png";
import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import b4 from "../../assets/images/b4.png";
import b5 from "../../assets/images/b5.png";
import b6 from "../../assets/images/b6.png";
// import p1 from "../../assets/images/p1.png";
// import p2 from "../../assets/images/p2.png";
// import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import p6 from "../../assets/images/p6.png";
import s1 from "../../assets/images/s1.png";
// import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
// import s6 from "../../assets/images/s6.png";
import s7 from "../../assets/images/s7.png";
import s8 from "../../assets/images/s8.png";
import pizzareplace from "../../assets/videos/pizzareplace.mp4";
import pizza2replace from "../../assets/videos/pizza2replace.mp4";
import odflatsmallreplace from "../../assets/videos/odflatsmallreplace.mp4";
import overdosereplace from "../../assets/videos/overdosereplace.mp4";
import odcreamcupreplace from "../../assets/videos/odcreamcupreplace.mp4";
import revolution from "../../assets/videos/revolution.mp4";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const pRef = useRef(null);
  // const portfolioRef = useRef(null);

  useEffect(() => {
    const el = pRef.current;
    const scrollLength = el.scrollWidth - window.innerWidth;
    return () => {
      gsap.to(".grid-wrapper", {
        x: -scrollLength,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    };
  }, []);

  // useEffect(() => {
  //   const el = pRef.current;
  //   const container = portfolioRef.current;

  //   const scrollLength = el.scrollWidth - window.innerWidth;

  //   const tween = gsap.to(el, {
  //     x: -scrollLength,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       start: "top top",
  //       end: `+=${scrollLength}`,
  //       scrub: 1,
  //       pin: true,
  //       anticipatePin: 1,
  //       // markers: true, // optional: remove in production
  //     },
  //   });

  //   return () => {
  //     if (tween.scrollTrigger) tween.scrollTrigger.kill();
  //     tween.kill();
  //   };
  // }, []);

  return (
    <div className="portfolio-section" /*ref={portfolioRef}*/>
      <div className="grid-wrapper" ref={pRef}>
        <div className="item socialMedia">
          <img src={socialm1} alt="Flat 15%" />
        </div>
        <div className="item saturday">
          <img src={s7} alt="Saturday Offer" />
        </div>
        <div className="item flat">
          <img src={s8} alt="Flat 15%" />
        </div>
        <div className="item degitalart">
          <img src={degitalart} alt="Degitalart" />
        </div>
        <div className="item professional">
          <img src={p6} alt="Professional" />
        </div>
        <div className="item portfolio2025">
          {/* <video width="100%" height="100%" loop autoPlay muted>
            <source src={bannervideo} type="video/mp4" />
          </video> */}
          <img src={portfolio2025} alt="portfolio2025" />
        </div>
        <div className="item odicecreame">
          <img src={p5} alt="OD Icecreame" />
        </div>
        <div className="item focusing">
          <img src={b6} alt="Focusing" />
        </div>
        <div className="item professional2">
          <img src={s1} alt="professional2" />
        </div>
        <div className="item pizza">
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={pizzareplace} type="video/mp4" />
          </video>
          {/* <img src={s2} alt="pizza" /> */}
        </div>
        <div className="item logo2">
          <img src={logo2} alt="logo2" />
        </div>
        <div className="item overdose">
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={overdosereplace} type="video/mp4" />
          </video>
          {/* <img src={p3} alt="overdose" /> */}
        </div>
        <div className="item odcreamcup">
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={odcreamcupreplace} type="video/mp4" />
          </video>
          {/* <img src={s6} alt="odcreamcup" /> */}
        </div>
        <div className="item adcampaign">
          <img src={adcampaign} alt="adcampaign" />
        </div>
        <div className="item skybot">
          <img src={b5} alt="skybot" />
        </div>
        <div className="item flatsmall">
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={odflatsmallreplace} type="video/mp4" />
          </video>
          {/* <img src={p2} alt="flatsmall" /> */}
        </div>
        <div className="item transform">
          <img src={b4} alt="transform" />
        </div>
        <div className="item geliato">
          <img src={p4} alt="geliato" />
        </div>
        <div className="item solution">
          <img src={b3} alt="solution" />
        </div>
        <div className="item boca">
          <img src={s3} alt="boca" />
        </div>
        <div className="item odhoddie">
          <img src={b1} alt="odhoddie" />
        </div>
        <div className="item children">
          <img src={s5} alt="children" />
        </div>
        <div className="item strawberry">
          <img src={s4} alt="strawberry" />
        </div>
        <div className="item pizza2">
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={pizza2replace} type="video/mp4" />
          </video>
          {/* <img src={p1} alt="pizza2" /> */}
        </div>
        <div className="item portfolio">
          <img src={portfolio} alt="portfolio" />
        </div>
        <div className="item revolution">
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={revolution} type="video/mp4" />
          </video>
          {/* <img src={b2} alt="revolution" /> */}
        </div>
        <div className="item empty-space"></div>
      </div>
    </div>
  );
};

export default Portfolio;
