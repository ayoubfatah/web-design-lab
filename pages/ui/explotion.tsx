//
import React, { useState, useRef, useEffect } from "react";

const ExplodingButton = ({ children, onAction, className = "" }: any) => {
  const [isExploded, setIsExploded] = useState(false);
  const [particles, setParticles] = useState([]);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [buttonDimensions, setButtonDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (buttonRef.current) {
      setButtonDimensions({
        width: buttonRef.current.offsetWidth,
        height: buttonRef.current.offsetHeight,
      });
    }
  }, []);

  const handleClick = async () => {
    if (onAction) {
      await onAction();
    }
    setIsExploded(true);
    createParticles();
  };

  const createParticles = () => {
    const newParticles: any = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        startX: Math.random() * buttonDimensions.width,
        startY: Math.random() * buttonDimensions.height,
        x: (Math.random() - 0.5) * buttonDimensions.width * 0.8,
        y:
          (Math.random() - 0.5) *
          buttonDimensions.width *
          0.8 *
          Math.sin(90 + i),
        size: Math.random() * 4 + 2,
      });
    }
    setParticles(newParticles);
  };

  return (
    <div
      className="relative"
      ref={buttonRef}
      style={{
        width: isExploded ? buttonDimensions.width : "auto",
        height: isExploded ? buttonDimensions.height : "auto",
      }}
    >
      <style jsx>{`
        @keyframes explode {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }
        .particle {
          position: absolute;
          background-color: pink;
          animation: explode 0.8s ease-out forwards;
        }
      `}</style>
      {!isExploded ? (
        <button
          onClick={handleClick}
          className={`px-4 py-2 bg-white text-black rounded-full focus:outline-none focus:ring-2 ${className}`}
        >
          {children}
        </button>
      ) : (
        particles.map((particle: any) => (
          <div
            key={particle.id}
            className="particle rounded-full bg-pink-400"
            style={
              {
                left: `${particle.startX}px`,
                top: `${particle.startY}px`,
                "--tx": `${particle.x}px`,
                "--ty": `${particle.y}px`,
                width: `${particle.size * 2}px`,
                height: `${particle.size * 2}px`,
              } as React.CSSProperties
            }
          ></div>
        ))
      )}
    </div>
  );
};

export default ExplodingButton;
