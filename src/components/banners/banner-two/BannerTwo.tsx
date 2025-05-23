import React, { useEffect, useRef } from "react";
import "./BannerTwo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RingImage from "../../../assets/images/ring.png";

gsap.registerPlugin(ScrollTrigger);

const BannerTwo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Build headline animation
      gsap.fromTo(
        ".build",
        { x: "-95.4%" },
        {
          x: "0%",
          duration: 7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            toggleActions: "play none none none",
          },
        }
      );

      // Background "Build" blink like keyframes
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top+=100",
            toggleActions: "play none none none",
          },
        })
        .to(".bgtxtbuild", { opacity: 0, duration: 2 })
        .to(".bgtxtbuild", { opacity: 1, duration: 1 })
        .to(".bgtxtbuild", { opacity: 0, duration: 1 })
        .to(".bgtxtbuild", { opacity: 0, duration: 3 });

      // Left ring rotate
      // LEFT image
      gsap.fromTo(
        ".img1",
        {
          xPercent: -50,
          yPercent: 60,
          rotate: 0,
        },
        {
          rotate: 1800,
          xPercent: -50,
          yPercent: 60,
          duration: 7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            toggleActions: "play none none none",
          },
        }
      );

      // RIGHT image
      gsap.fromTo(
        ".img2",
        {
          xPercent: 50,
          yPercent: 60,
          rotate: 1800,
        },
        {
          rotate: 0,
          xPercent: 50,
          yPercent: 60,
          duration: 7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container1" ref={sectionRef}>
      <div className="text-container">
        <h1 className="bgtxtbuild">Build</h1>
        <h1 className="build">
          Build Build Build Build Build Build Build Build Build Build Build
          Build Build Build Build Build Build Build Build Build
        </h1>
      </div>
      <div className="build-bottom">
        <img className="img1" src={RingImage} alt="Not Available" />
        <img className="img2" src={RingImage} alt="Not Available" />
      </div>
    </div>
  );
};

export default BannerTwo;
