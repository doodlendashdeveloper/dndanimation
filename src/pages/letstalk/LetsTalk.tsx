import React, { useEffect } from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/images/arrow.png";
import starik from "../../assets/images/starik.png";
import "./LetsTalk.css";
import hand from "../../assets/images/hand.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Important: Register this BEFORE any scrollTriggers are defined
// ScrollTrigger.normalizeScroll(true);

const LetsTalk: React.FC = () => {
  // useEffect(() => {
  //   const handleResize = () => {
  //     ScrollTrigger.refresh();
  //   };

  //   window.addEventListener("resize", handleResize);
  //   window.addEventListener("orientationchange", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     window.removeEventListener("orientationchange", handleResize);
  //   };
  // }, []);

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     ScrollTrigger.refresh();
  //   }, 500);
  // }, []);

  // useEffect(() => {
  //   const innerwidth = window.innerWidth;
  //   console.log("innerwidth is = ", innerwidth);

  //   if (innerwidth <= 580) {
  //     console.log("innerwidth is less then 580", innerwidth);

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".lets-talk-section",
  //         start: "top top",
  //         end: "top -100%",
  //         scrub: 1,
  //         pin: true,
  //         pinSpacing: true,
  //         invalidateOnRefresh: true,
  //         // markers: true,
  //       },
  //     });

  //     tl.to({}, { duration: 0.05 });

  //     tl.to(".contact-us", {
  //       opacity: 0,
  //       y: 200,
  //       duration: 0.3,
  //       ease: "power1.out",
  //     });

  //     tl.set(".contact-us", { pointerEvents: "none" });

  //     tl.fromTo(
  //       ".arrow",
  //       { x: 0, rotate: 0 },
  //       { x: 150, transformOrigin: "center", rotate: 90, ease: "none" }
  //     );

  //     tl.set(".scroll-txt", { display: "block" });

  //     tl.fromTo(
  //       ".scroll-txt",
  //       { x: -300, opacity: 0 },
  //       { x: 0, opacity: 1, ease: "power1.out" }
  //     );

  //     tl.to({}, { duration: 0.05 });

  //     return () => {
  //       ScrollTrigger.getAll().forEach((t) => t.kill());
  //       tl.kill();
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const innerwidth = window.innerWidth;
    if (innerwidth > 580) {
      console.log("innerwidth is greater then 580", innerwidth);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".lets-talk-section",
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          // markers: true,
        },
      });

      tl.to({}, { duration: 0.05 });

      tl.to(".contact-us", {
        opacity: 0,
        y: 200,
        duration: 0.3,
        ease: "power1.out",
      });

      tl.set(".contact-us", { pointerEvents: "none" });

      tl.fromTo(
        ".arrow",
        { y: 0, rotate: 0 },
        { y: 150, transformOrigin: "bottom left", rotate: 90, ease: "none" }
      );

      tl.set(".scroll-txt", { display: "block" });

      tl.fromTo(
        ".scroll-txt",
        { y: -300, opacity: 0 },
        { y: 0, opacity: 1, ease: "power1.out" }
      );

      tl.to({}, { duration: 0.05 });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        tl.kill();
      };
    }
  }, []);

  // const scrambleRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const scrambleElement = scrambleRef.current;
  //   if (!scrambleElement) return;

  //   const text = scrambleElement.getAttribute("data-text") || "";
  //   scrambleElement.innerHTML = [...text]
  //     .map((char) => `<span class="char">${char}</span>`)
  //     .join("");

  //   const handleMouseEnter = () => {
  //     const chars = scrambleElement.querySelectorAll(".char");

  //     chars.forEach((char, i) => {
  //       const randomDelay = Math.random() * 0.1;
  //       const flickers = Math.floor(Math.random() * 6) + 3;

  //       for (let j = 0; j < flickers; j++) {
  //         gsap.to(char, {
  //           opacity: Math.random() < 0.5 ? 0 : 1,
  //           delay: randomDelay + j * 0.1,
  //           duration: 0.05,
  //           ease: "none",
  //         });
  //       }

  //       gsap.to(char, {
  //         opacity: 1,
  //         delay: randomDelay + flickers * 0.1,
  //         duration: 0.05,
  //         ease: "none",
  //       });
  //     });
  //   };

  //   scrambleElement.addEventListener("mouseenter", handleMouseEnter);

  //   return () => {
  //     scrambleElement.removeEventListener("mouseenter", handleMouseEnter);
  //   };
  // }, []);

  return (
    <div className="lets-talk-section">
      {/* <a href="/contact" className="footer-cta h1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 19"
          className="footer-cta__svg footer-cta__svg--clone"
        >
          <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z" />
        </svg>
        <div className="scramble-wrapper">
          <div
            className="scramble-text"
            data-text="Let's Talk"
            ref={scrambleRef}
          ></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 19"
          className="footer-cta__svg footer-cta__svg--main"
        >
          <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z" />
        </svg>
      </a> */}
      <motion.img
        initial={{ rotate: -2 }}
        animate={{ rotate: [-2, 6, -2] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="lets-talk-hand"
        src={hand}
        alt="hand-image"
      />

      <div className="lets-talk-inner-section">
        <div className="text-div">
          <div className="inner-empty"></div>

          <div className="inner-left-text">
            <div className="lets-talk-txt">
              <h1 className="nova-text">
                Let<sup>,</sup>
              </h1>
              <h1 className="s">s</h1>
            </div>
            <div>
              <h1 className="nova-talk">Talk</h1>
            </div>
          </div>
          <div className="inner-right-contact">
            <div className="inner-wrapper">
              <div className="scroll-txt">
                <p>
                  If you are excited to collaborate with DND Animatonfeel
                  totally free to get in touch. We'd love to chatabout what you
                  got cooking Give us a bellorshoot us an email. The deets of
                  the bestperson to getin touch with can be found below, and
                  we'll be in touch as soon as we can.
                </p>
              </div>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
              <div className="contact-us">
                <ul>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <p>Contact us</p>
                  </li>
                  <li>
                    <p>Let's talk</p>
                  </li>
                  <li>
                    <p>/ General enquiries</p>
                  </li>
                  <li>
                    <a href="mailto:info@dndanimations.com">
                      info@dndanimations.com
                    </a>
                  </li>
                </ul>
                <div className="tel-btn">
                  <a href="tel:7732196748">(773) 219-6748</a>
                </div>
                <ul>
                  <li>Address</li>
                  <li>465 N Park Dr Chicago IL 60611</li>
                </ul>
              </div>
              <div className="starik">
                <motion.img
                  initial={{
                    rotate: 0,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  src={starik}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
    </div>
  );
};

export default LetsTalk;
