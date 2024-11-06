import React, { useState, useCallback } from "react";

const FlashLight = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  return (
    <main onMouseMove={handleMouseMove} className="w-screen">
      <div
        className="relative bg-black text-white w-full h-screen overflow-hidden"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/black-glitch-effect-digital-noise-texture-background_53876-103977.jpg)`,
          WebkitMaskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
        }}
      >
        <div className="flex items-center justify-center h-full text-5xl font-semibold">
          {children}
        </div>
      </div>


    </main>
  );
};

export default FlashLight;
