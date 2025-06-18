import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./MagicButton.css";

const MagicButton = ({ children, link, classname }) => {
  const btnRef = useRef(null);

  const setCoords = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };
  const isTelLink = link.startsWith("tel:");

  return isTelLink ? (
    <a
      href={link}
      className={`hover-btn ${classname}`}
      ref={btnRef}
      onMouseMove={setCoords}
      onMouseLeave={setCoords}
    >
      <span className="hover-btn-text">{children}</span>
    </a>
  ) : (
    <Link
      to={link}
      className={`hover-btn ${classname}`}
      ref={btnRef}
      onMouseMove={setCoords}
      onMouseLeave={setCoords}
    >
      <span className="hover-btn-text">{children}</span>
    </Link>
  );
};

export default MagicButton;
