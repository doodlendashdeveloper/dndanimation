import React, { useEffect, useRef, useState } from "react";
import "./BannerThree.css";
import RingImage from "../../../assets/images/ring.png";

const builds = Array(25).fill("BUILD");

const BannerThree = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const leftRingRef = useRef<HTMLImageElement>(null);
  const rightRingRef = useRef<HTMLImageElement>(null);
  const [decelerated, setDecelerated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDecelerated(true);
      lineRef.current?.classList.add("decelerate");
      leftRingRef.current?.classList.add("decelerate");
      rightRingRef.current?.classList.add("decelerate");
    }, 5000); // Decelerate after 10s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="banner-section">
      <img src={RingImage} alt="ring" className="ring-left" ref={leftRingRef} />
      <img
        src={RingImage}
        alt="ring"
        className="ring-right"
        ref={rightRingRef}
      />

      <div className="build-stream">
        <span className="build-text shadow">BUILD</span>
        <div
          className={`build-line ${decelerated ? "decelerate" : ""}`}
          ref={lineRef}
        >
          {builds.map((word, index) => (
            <div className="build-text-wrapper" key={index}>
              <span className="build-text">BUILD</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerThree;
