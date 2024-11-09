import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FakeWebsite from "./FakeWebsite";

const colors = [
  { bg: "#FF0000", name: "red" },
  { bg: "#00FF00", name: "green" },
  { bg: "#ffffff", name: "white" },
  { bg: "#2f2e2a", name: "slate" },
  { bg: "#544f52", name: "slateLow" },
  { bg: "#800080", name: "purple" },
  { bg: "#FFA500", name: "orange" },
  { bg: "#008080", name: "teal" },
  { bg: "#4B0082", name: "indigo" },
  { bg: "#32CD32", name: "lime" },
  { bg: "#000000", name: "black" },
];

const cards = [
  { title: "Card 1", initialColor: "#ffffff" },
  { title: "Card 2", initialColor: "#f0f0f0" },
  { title: "Card 3", initialColor: "#e0e0e0" },
];

export default function App() {
  const [newColor, setNewColor] = useState<string | undefined>("");
  const handleCardColorChange = (index: number, color: string) => {
    const getColorName = colors.find((cr) => cr.bg === color);
    setNewColor(getColorName?.name);
  };
  console.log(newColor);
  return (
    <ColorChangeElement initialColor="#f3f4f6" className="min-h-screen">
      <div className="relative">
        <div>
          <ColorChangeElement
            initialColor="#ffffff"
            className="w-full p-4 shadow-md"
            onColorChange={(color) => handleCardColorChange?.(1, color)}
          >
            <div className="flex text-center items-center justify-center max-w-6xl mx-auto">
              <h1
                className={`text-2xl font-bold ${
                  newColor === "red" ? "text-blue-500" : "text-green-500"
                }`}
              >
                Tahanout
              </h1>
            </div>
          </ColorChangeElement>

          <main className="max-w-6xl mx-auto mt-8 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <ColorChangeElement
                  key={index}
                  initialColor={card.initialColor}
                  className="w-full h-64 rounded-lg shadow-lg flex justify-center items-center"
                  onColorChange={(color) =>
                    handleCardColorChange?.(index, color)
                  }
                >
                  <h2 className="text-xl font-bold">{card.title}</h2>
                </ColorChangeElement>
              ))}
            </div>
          </main>
        </div>

        {/*  */}
        <DraggableColorPalette colors={colors} />
      </div>
    </ColorChangeElement>
  );
}

export function DraggableColorPalette({ colors }: { colors: Color[] }) {
  const handleDragStart = useCallback(
    (color: Color, e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData("color", JSON.stringify(color));
      console.log("dropped");
    },
    []
  );

  return (
    <motion.div
      className="fixed left-4 top-20 flex flex-col gap-3 p-3 rounded-lg bg-white shadow-lg"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {colors.map((color, index) => (
        <motion.div
          key={color.bg}
          draggable="true"
          onDragStart={(e: any) => handleDragStart(color, e)}
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 1.2 }}
          className="w-8 h-8 rounded-full cursor-move border border-"
          style={{ backgroundColor: color.bg }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </motion.div>
  );
}

interface Color {
  bg: string;
  name: string;
}

interface Circle {
  x: number;
  y: number;
  color: string;
  id: number;
}

interface ColorChangeElementProps {
  initialColor?: string;
  onColorChange?: (color: string) => void;
  className?: string;
  children: React.ReactNode;
}

export function ColorChangeElement({
  initialColor = "white",
  onColorChange,
  className,
  children,
}: ColorChangeElementProps) {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [activeColor, setActiveColor] = useState<string>(initialColor);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const color = e.dataTransfer.getData("color")
        ? (JSON.parse(e.dataTransfer.getData("color")) as Color)
        : null;
      const rect = elementRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        console.log(color, rect);
        setCircles((prevCircles) => [
          ...prevCircles,
          {
            x,
            y,
            color: color?.bg ?? " ",
            id: Date.now(),
          },
        ]);

        setActiveColor(color ? color?.bg : "");
        onColorChange?.(color ? color?.bg : "");
      }
    },
    [onColorChange]
  );

  const shouldUseWhiteText = isColorDark(activeColor);

  return (
    <div
      className={`${className} relative overflow-hidden transition-colors duration-300`}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDrop={handleDrop}
      style={{ backgroundColor: activeColor }}
    >
      <AnimatePresence>
        {circles.map((circle) => (
          <motion.div
            key={circle.id}
            initial={{ scale: 0, x: circle.x, y: circle.y, opacity: 0.8 }}
            animate={{ scale: 200, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.7, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: circle.color,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        ))}
      </AnimatePresence>
      <div
        ref={elementRef}
        className={`relative z-10 ${
          shouldUseWhiteText ? "text-white" : "text-gray-800"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function isColorDark(hexColor: string): boolean {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}
