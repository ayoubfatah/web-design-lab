import React, { useState, useEffect, useCallback, useRef } from "react";

const img =
  "https://images.unsplash.com/photo-1517239320384-e08ad2c24a3e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const GlitchText = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef(null);

  const words =
    "My name is  Ayoub  Fatah  and I am a web developer from Morocco :D and this is my portfolio . ".split(
      " "
    );

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = useCallback(
    (event: any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log(mousePosition);
    },
    [mousePosition]
  );

  return (
    <main>
      <div
        className="relative bg-black w-screen h-[450vh] flex flex-col items-center overflow-hidden "
        onMouseMove={handleMouseMove}
      >
        {/* Unsplash background image */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${img})`,

            WebkitMaskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
          }}
        ></div>

        {/* Text content */}
        <div
          className="fixed w-[900px] m-auto leading-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold z-10"
          ref={contentRef}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={` ${
                word === "web" || word === "developer" ? "!text-red-500" : ""
              }  mr-2 inline-block transition-all duration-500	`}
              style={{
                opacity: scrollPosition > index * 100 ? 1 : 0,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      <span className="opacity-100 hover:opacity-100 fixed top-0 right-0 "></span>
    </main>
  );
};

export default GlitchText;
