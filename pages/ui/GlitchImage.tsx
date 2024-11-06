"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HolographicDisplayProps {
  image?: string;
  width: number;
  height: number;
  alt?: string;
}

export default function HolographicDisplay({
  image,
  width,
  height,
  alt = "Holographic display",
}: HolographicDisplayProps) {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setFlicker((prev) => !prev);
    }, 100 + Math.random() * 200);

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <div
      className="relative bg-black overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className={`relative w-full h-full ${
          flicker ? "opacity-90" : "opacity-100"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="z-10 opacity-45"
          />
        ) : (
          <div className="w-full h-full bg-cyan-900 flex items-center justify-center z-10">
            <span className="text-cyan-300 text-lg">No Image</span>
          </div>
        )}

        {/* Holographic effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Color aberration */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-blue-500 mix-blend-screen translate-x-[2px] translate-y-[1px]" />
            <div className="absolute inset-0 bg-cyan-500 mix-blend-screen -translate-x-[2px] -translate-y-[1px]" />
          </div>

          {/* Scan lines */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-200 to-transparent opacity-20"
            style={{
              backgroundSize: "100% 4px",
              backgroundRepeat: "repeat-y",
              animation: "scan 8s linear infinite",
            }}
          />

          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Horizontal distortion lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-[2px] bg-cyan-300 opacity-30"
                style={{
                  top: `${10 + i * 10}%`,
                  left: `${Math.sin(i) * 100}%`,
                  animation: `distort ${
                    3 + i * 0.5
                  }s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-cyan-500 opacity-10 blur-xl" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }

        @keyframes distort {
          0% {
            transform: translateX(-5%);
          }
          100% {
            transform: translateX(5%);
          }
        }
      `}</style>
    </div>
  );
}
