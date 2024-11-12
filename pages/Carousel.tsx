import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDF8MHx8fDA%3D",
    color: "#dc9419",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1668485968642-30e3d15e9b9c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#b2778e",
  },
  {
    src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    color: "#45B7D1",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    color: "#bac7ca",
  },
];

const images2 = [
  {
    src: "https://images.unsplash.com/photo-1473286835901-04adb1afab03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb258ZW58MHwxfDB8fHww",
    color: "#deaaba",
  },
  {
    src: "https://images.unsplash.com/photo-1542596767-e9c33dc85019?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb258ZW58MHwxfDB8fHww",
    color: "#c5cac5",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHwxfDB8fHww",
    color: "#d4c925",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1708110921152-850148b86156?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZhc2hpb258ZW58MHwxfDB8fHww",
    color: "#c61f40",
  },
];

let scrollSpeed = 1;

const Carousel: React.FC = () => {
  const scrollContainer1 = useRef<HTMLDivElement>(null);
  const scrollContainer2 = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndex1, setHoveredIndex1] = useState<number | null>(null);

  useEffect(() => {
    const container1 = scrollContainer1.current;
    const container2 = scrollContainer2.current;

    if (!container1 || !container2) return;

    const totalScrollHeight1 = container1.scrollHeight / 2;
    const totalScrollHeight2 = container2.scrollHeight / 2;

    let scrollPos1 = 0;
    let scrollPos2 = 0;

    const scrollHandler = () => {
      scrollPos1 += scrollSpeed;
      if (scrollPos1 >= totalScrollHeight1) {
        scrollPos1 = 0;
      }
      container1.scrollTop = scrollPos1;

      console.log(scrollPos1, "scrollPos1");
      console.log(totalScrollHeight1, "totalScrollHeight1");

      scrollPos2 -= scrollSpeed;
      if (scrollPos2 <= 0) {
        scrollPos2 = totalScrollHeight2;
      }
      container2.scrollTop = scrollPos2;

      requestAnimationFrame(scrollHandler);
    };

    requestAnimationFrame(scrollHandler);
  }, []);

  const renderImage = (
    imagesArray: typeof images,
    containerRef: React.RefObject<HTMLDivElement>,
    hoveredIndexState: number | null,
    setHoveredIndexState: React.Dispatch<React.SetStateAction<number | null>>,
    keyPrefix: string
  ) => (
    <div
      ref={containerRef}
      className="flex flex-col space-y-4 overflow-hidden"
      style={{ height: "100vh", width: "301px" }}
    >
      {[...imagesArray, ...imagesArray].map((image, index) => (
        <div
          key={`${keyPrefix}-${index}`}
          onMouseEnter={() => {
            scrollSpeed = 0.5;
            setHoveredIndexState(index % imagesArray.length);
          }}
          onMouseLeave={() => {
            scrollSpeed = 1;
            setHoveredIndexState(null);
          }}
          className="relative w-[300px] h-[400px]"
        >
          <div
            style={{ backgroundColor: image.color }}
            className={`absolute w-full h-full transition-opacity duration-300 ease-in-out ${
              hoveredIndexState === index % imagesArray.length
                ? "opacity-[75%]"
                : "opacity-0"
            }`}
          ></div>
          <button
            className={`absolute z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white text-black py-3 px-6 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 ease-in-out ${
              hoveredIndexState === index % imagesArray.length
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            Shop Now
          </button>
          <Image
            src={image.src}
            alt={`Clothing item ${index + 1}`}
            width={300}
            height={400}
            className="w-[300px] h-[400px] object-cover flex-shrink-0 shadow-lg"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-pink-50 h-screen flex justify-between">
      <div className="flex text-black w-1/2 mx-[60px] gap-[10px] flex-col items-left justify-center h-screen bg-gray-100 px-4">
        <h1 className="text-6xl font-bold mb-4 gradient-text">
          Unveil Your Style
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-left max-w-md">
          Explore the latest trends and timeless pieces that reflect your
          personality. Elevate your wardrobe with our curated collection
          designed for every occasion.
        </p>
        <button className="bg-pink-400 text-left w-[150px] flex justify-center text-white py-3 px-6 rounded-full hover:bg-pink-500 transition duration-300">
          Shop Now
        </button>
      </div>

      <div className="flex w-1/2 gap-[16px] items-center justify-end overflow-hidden">
        {renderImage(
          images,
          scrollContainer1,
          hoveredIndex,
          setHoveredIndex,
          "first"
        )}
        {renderImage(
          images2,
          scrollContainer2,
          hoveredIndex1,
          setHoveredIndex1,
          "second"
        )}
      </div>
    </section>
  );
};

export default Carousel;
