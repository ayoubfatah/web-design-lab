import React, { useState, useRef, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const items = [
    {
      id: 1,
      color: "bg-blue-500",
      content: "1",
      borderColor: "border-blue-300",
    },
    {
      id: 2,
      color: "bg-green-500",
      content: "2",
      borderColor: "border-green-300",
    },
    { id: 3, color: "bg-red-500", content: "3", borderColor: "border-red-300" },
    {
      id: 4,
      color: "bg-yellow-500",
      content: "4",
      borderColor: "border-yellow-300",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const getItemClasses = (index) => {
    const baseClasses =
      "carousel-item mx-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center text-white text-2xl border-4";
    const distance = Math.abs(
      (index - currentIndex + items.length) % items.length
    );

    if (distance === 0) {
      return `${baseClasses} w-48 h-48 z-10`;
    } else {
      return `${baseClasses} w-32 h-32`;
    }
  };

  const getItemStyle = (index) => {
    const order = (index - currentIndex + items.length) % items.length;
    return {
      boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)", // Neon glow effect
      order: order,
    };
  };

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    // Calculate new index based on drag direction
    const dragDirection = walk > 0 ? -1 : 1;
    setCurrentIndex(
      (prevIndex) => (prevIndex + dragDirection + items.length) % items.length
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("mousedown", startDragging);
    carousel.addEventListener("mousemove", onDrag);
    carousel.addEventListener("mouseup", stopDragging);
    carousel.addEventListener("mouseleave", stopDragging);

    return () => {
      carousel.removeEventListener("mousedown", startDragging);
      carousel.removeEventListener("mousemove", onDrag);
      carousel.removeEventListener("mouseup", stopDragging);
      carousel.removeEventListener("mouseleave", stopDragging);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative w-full max-w-3xl overflow-hidden">
        <div
          ref={carouselRef}
          className="flex items-center transition-all duration-300 ease-in-out"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            transform: `translateX(${-currentIndex * 144}px)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${getItemClasses(index)} ${item.color} ${
                item.borderColor
              }`}
              style={getItemStyle(index)}
            >
              {item.content}
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full shadow-md text-white z-20"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full shadow-md text-white z-20"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
