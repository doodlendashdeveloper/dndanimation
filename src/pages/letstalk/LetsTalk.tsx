import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./LetsTalk.css"; // Assume the CSS is moved to this file for maintainability

const LetsTalk: React.FC = () => {
  const scrambleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrambleElement = scrambleRef.current;
    if (!scrambleElement) return;

    const text = scrambleElement.getAttribute("data-text") || "";
    scrambleElement.innerHTML = [...text]
      .map((char) => `<span class="char">${char}</span>`)
      .join("");

    const handleMouseEnter = () => {
      const chars = scrambleElement.querySelectorAll(".char");

      chars.forEach((char, i) => {
        const randomDelay = Math.random() * 0.1;
        const flickers = Math.floor(Math.random() * 6) + 3;

        for (let j = 0; j < flickers; j++) {
          gsap.to(char, {
            opacity: Math.random() < 0.5 ? 0 : 1,
            delay: randomDelay + j * 0.1,
            duration: 0.05,
            ease: "none",
          });
        }

        gsap.to(char, {
          opacity: 1,
          delay: randomDelay + flickers * 0.1,
          duration: 0.05,
          ease: "none",
        });
      });
    };

    scrambleElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      scrambleElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className="lets-talk-section">
      <a href="/contact" className="footer-cta h1">
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
      </a>
    </div>
  );
};

export default LetsTalk;
