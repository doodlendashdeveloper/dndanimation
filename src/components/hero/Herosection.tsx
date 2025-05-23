import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bannervideo from "../../assets/videos/video.mp4";
import springy from "../../assets/videos/springy.mp4";
import mypng from "../../assets/images/mypng.png";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

const Herosection = () => {
  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    // Step 1: Scale down from 27 to 1 (0% to 40%)
    tl.fromTo(".bgfont", { scale: 27 }, { scale: 1, ease: "none" }, 0);

    // Step 2: Hold center (y: 0%) – this is not animated but used to maintain continuity
    // (skip extra .to unless needed)

    // Step 3: Move text upward (0.6 to 1)
    tl.to(".bgfont", { y: "-90%", ease: "power2.out" }, 0.6);

    // Blend mode transition near end (still reversible)
    tl.to(".mask", { mixBlendMode: "normal", zIndex: 2 }, 0.8);

    // Show springy video
    tl.to(".springyvid", { opacity: 1, zIndex: 1 }, 0.95);
  }, []);

  return (
    <div className="hero-container">
      <video width="100%" height="100%" loop autoPlay muted>
        <source src={bannervideo} type="video/mp4" />
      </video>
      <div className="mask">
        {/* <img src={mypng} alt="image not available" /> */}
        <h1 className="bgfont">DND</h1>
        <video
          className="springyvid"
          width="100%"
          height="100%"
          loop
          autoPlay
          muted
        >
          <source src={springy} type="video/mp4" />
        </video>
        {/* <img
          className="myimg"
          width="300px"
          src={img}
          alt="Image not Available"
        /> */}
      </div>
    </div>
  );
};

export default Herosection;
