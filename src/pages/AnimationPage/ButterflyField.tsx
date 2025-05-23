import React from "react";
import "./ButterflyField.css";

const ButterflyField: React.FC = () => {
  return (
    <div className="butterfly-container">
      {[...Array(10)].map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 4;

        return (
          <div
            className="butterfly-wrapper"
            key={i}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <div className="butterfly" />
          </div>
        );
      })}
    </div>
  );
};

export default ButterflyField;
