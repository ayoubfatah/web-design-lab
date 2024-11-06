import React from "react";
import HolographicDisplay from "./ui/glitchImage";

export default function Falling() {
  const img = { src: "https://avatars.githubusercontent.com/u/106997303?v=4" };
  return (
    <div>
      <h2 className="text-xl mb-2">With Image</h2>
      <HolographicDisplay image={img.src} width={400} height={600} />
    </div>
  );
}
