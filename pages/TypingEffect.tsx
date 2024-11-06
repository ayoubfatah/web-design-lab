import React, { useEffect, useRef, useState } from "react";

export default function TypingEffect() {
  const [condition, setCondition] = useState(false);
  const text =
    "In a world where technology and humanity intertwine, the quest for knowledge becomes a journey of discovery. Each day presents new challenges and opportunities, urging us to explore the depths of our potential. As we navigate through the complexities of life, we find ourselves at the crossroads of innovation and tradition, where the past informs our future. The stories we tell and the connections we forge shape our understanding of existence, reminding us that every moment is a chance to learn, grow, and inspire others. Together, we can create a tapestry of experiences that enrich our lives and the lives of those around us.";
  const delay = 10;

  const [animatedText, setAnimatedText] = useState("");
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const positionRef = useRef(0);
  const isPlaying = useRef(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setCondition(true);
    }, 400);
    return () => clearTimeout(id);
  }, [condition]);

  useEffect(() => {
    const startAnimation = () => {
      if (isPlaying.current && positionRef.current < text.length) {
        setAnimatedText(text.slice(0, positionRef.current + 1));
        positionRef.current++;
        animationRef.current = setTimeout(startAnimation, delay);
      }
    };
    if (!condition) {
      setAnimatedText("");
      positionRef.current = 0;
      return;
    }

    if (isPlaying.current) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [condition, delay, text]);

  const handlePlay = () => {
    if (!isPlaying.current) {
      isPlaying.current = true;
      if (positionRef.current < text.length) {
        // Resume the animation from current position
        animationRef.current = setTimeout(startAnimation, delay);
      }
    }
  };

  const handleStop = () => {
    isPlaying.current = false;
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
  };

  const handleRest = () => {
    setCondition(false);
    isPlaying.current = true;
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
  };
  const startAnimation = () => {
    if (isPlaying.current && positionRef.current < text.length) {
      setAnimatedText(text.slice(0, positionRef.current + 1));
      positionRef.current++;
      animationRef.current = setTimeout(startAnimation, delay);
    }
  };

  return (
    <>
      <h1 className="text-center translate-y-[100px] text-3xl glitch">
        TYPING EFFECT
      </h1>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="flex gap-1 mb-[50px]">
          <div className="w-[800px] py-10 px-6  bg-gradient-to-b from-slate-700/40 rounded-t-xl to-transparent">
            {animatedText}
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button onClick={handlePlay}>Resume</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleRest}>Reset</button>
        </div>
      </div>
    </>
  );
}
