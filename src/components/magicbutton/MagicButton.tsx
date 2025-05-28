import React, { useRef } from "react";
import "./MagicButton.css";

const MagicButton = ({ children, link }) => {
  const btnRef = useRef(null);

  const setCoords = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <a
      href={link}
      className="hover-btn"
      ref={btnRef}
      onMouseMove={setCoords}
      onMouseLeave={setCoords}
    >
      <span className="hover-btn-text">{children}</span>
    </a>
  );
};

export default MagicButton;
