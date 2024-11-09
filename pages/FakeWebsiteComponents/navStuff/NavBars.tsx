import { AnimatePresence, motion } from "framer-motion";
import { Bell, MessageCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logoImage from "../../../public/logo1.png";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { DraggableColorPalette } from "@/pages/DroppingColors";
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
];

const animation =
  "motion-translate-x-in-[0%] motion-translate-y-in-[52%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/translate";
export const Navbar: React.FC<{ nav1v: number }> = ({ nav1v }) => {
  return (
    <ul
      className={` ${animation}   h-[66px]   flex items-center w-full justify-between py-3 px-2  rounded-t-md"`}
    >
      {nav1v === 1 && (
        <div
          className={`${animation}  flex items-center justify-between w-full`}
        >
          <h1 className="text-4xl font-bold">TS</h1>
          {/* <Logo /> */}
          <ul className="flex  gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=32" />
          </Avatar>
        </div>
      )}
      {nav1v === 2 && (
        <div
          className={`${animation}  flex items-center justify-between w-full`}
        >
          <h1 className="text-4xl font-bold">TS</h1>
          {/* <Logo /> */}
          <ul className="flex  gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
      )}
      {nav1v === 3 && (
        <div
          className={`${animation}  flex items-center justify-between w-full`}
        >
          <div className="flex items-center gap-10">
            <h1 className="text-4xl font-bold">TS</h1>
            {/* <Logo /> */}
            <ul className="flex  gap-5 ">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <MessageCircle className="h-6 w-6    " />
              <Badge className=" bg-red-600  rounded-full absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                3
              </Badge>
            </div>

            <div className="relative">
              <Bell className="h-6 w-6   " />
              <Badge className=" bg-red-600 rounded-full absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                5
              </Badge>
            </div>
            <Avatar className="ml-3">
              <AvatarImage src="https://i.pravatar.cc/150?img=33" />
            </Avatar>
          </div>
        </div>
      )}
    </ul>
  );
};

export const Navbar2: React.FC<{ nav2v: number }> = ({ nav2v }) => {
  const animation =
    "motion-translate-x-in-[0%] motion-translate-y-in-[72%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/translate";

  return (
    <ul
      className={` ${animation}  h-[66px]  top-0 left-0 flex items-center w-full justify-around py-3 px-2 rounded-t-md"`}
    >
      {nav2v === 1 && (
        <div
          className={`${animation} flex justify-between w-full items-center`}
        >
          <h1 className="text-4xl font-bold">TS</h1>
          {/* <Logo /> */}
          {nav2v === 1 && <SearchInput1 />}
          <div className={`${animation}`}>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=52" />
            </Avatar>
          </div>
        </div>
      )}

      {nav2v === 2 && (
        <div
          className={`${animation} flex justify-between w-full items-center`}
        >
          <h1 className="text-4xl font-bold">TS</h1>
          {/* <Logo /> */}
          {nav2v === 2 && <SearchInput2 />}
          <div className={`${animation}`}>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=28" />
            </Avatar>
          </div>
        </div>
      )}

      {nav2v === 3 && (
        <div
          className={`${animation} flex flex-wrap items-center justify-between w-full`}
        >
          <h1 className="text-4xl font-bold">TS</h1>
          {/* <Logo /> */}
          <div className="flex-1 min-w-[200px] max-w-xs">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-8 " placeholder="Search..." type="search" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <MessageCircle className="h-6 w-6    " />
              <Badge className=" bg-red-600  rounded-full absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                3
              </Badge>
            </div>

            <div className="relative">
              <Bell className="h-6 w-6   " />
              <Badge className=" bg-red-600 rounded-full absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                5
              </Badge>
            </div>

            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=58" />
            </Avatar>
          </div>
        </div>
      )}
    </ul>
  );
};

const SearchInput1 = () => {
  return (
    <form
      className={`${animation} flex items-center w-[600px] mx-auto pointer-events-none  h-[46px]`}
    >
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 21"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5 "
          placeholder="Search Mockups, Logos, Design Templates..."
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 "
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        Search
      </button>
    </form>
  );
};
const SearchInput2 = () => {
  return (
    <form className={`${animation} w-[600px]  mx-auto h-[46px]`}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="text-blue-500 absolute end-2.5 bottom-3  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4  "
        >
          Search
        </button>
      </div>
    </form>
  );
};

const Logo = () => {
  return (
    <div className="aspect-square size-[50px]">
      <Image className="object-cover" src={logoImage} alt="Logo" />
    </div>
  );
};

export function ColorChangeElement({
  initialColor = "white",
  onColorChange,
  className,
  children,
}: any) {
  const [circles, setCircles] = useState<any[]>([]);
  const [activeColor, setActiveColor] = useState<string>(initialColor);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const color = JSON.parse(e.dataTransfer.getData("color")) as any;
      const rect = elementRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setCircles((prevCircles) => [
          ...prevCircles,
          {
            x,
            y,
            color: color.bg,
            id: Date.now(),
          },
        ]);
        console.log(color, rect);

        setActiveColor(color.bg);
        onColorChange?.(color.bg);
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
