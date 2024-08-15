// RandomText.js
import React, { useState, useEffect } from "react";

const RandomText = () => {
  const text = "Hello";
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  let interval;

  const getRandomChar = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return chars.charAt(Math.floor(Math.random() * 4));
  };

  const startGlitching = () => {
    interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char) => (Math.random() > 0.5 ? getRandomChar() : char))
          .join("")
      );
    }, 40);
  };

  const stopGlitching = () => {
    clearInterval(interval);
    setDisplayText(text);
  };

  useEffect(() => {
    if (isHovering) {
      startGlitching();
    } else {
      stopGlitching();
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <span
        className="relative inline-block text-3xl font-bold transition duration-200 ease-in-out cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {displayText}
        <span className="absolute inset-0 text-white opacity-50 blur-sm">
          {displayText}
        </span>
      </span>
    </div>
  );
};

export default RandomText;
