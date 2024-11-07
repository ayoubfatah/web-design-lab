"use client";

import { useState, useCallback, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  animate,
  easeIn,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

function decay(value: number, max: number) {
  let entry = value / max;
  let sigmoid = 2 / (1 + Math.exp(-entry)) - 1;
  return sigmoid * max;
}

export default function Component() {
  const [region, setRegion] = useState<"left" | "middle" | "right">("middle");
  const sliderRef = useRef<HTMLDivElement>(null);

  const [volume, setVolume] = useState(30);
  const [isMuted, setIsMuted] = useState(false);

  let x = useMotionValue(0);
  let position = useMotionValue(0);

  useMotionValueEvent(position, "change", (latest) => {
    const { width } = sliderRef.current
      ? sliderRef.current.getBoundingClientRect()
      : { width: 0 };

    if (latest < 0) {
      setRegion("left");

      x.set(decay(latest, 60));
    } else if (latest > width) {
      setRegion("right");

      x.set(decay(latest - width, 60));
    } else {
      setRegion("middle");
      x.set(0);
    }
  });

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (isMuted && value[0] > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);
  console.log(region);
  return (
    <div className="w-full min-h-screen bg-zinc-6600 flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg space-y-3">
        <div className="flex items-center gap-1">
          <motion.div style={{ x: region === "left" ? x : 0 }}>
            <Button
              variant="destructive"
              size="icon"
              className="text-white "
              onClick={toggleMute}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-10 w-10" />
              ) : (
                <Volume2 className="h-10 w-10" />
              )}
              <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
            </Button>
          </motion.div>
          <motion.div
            style={{
              scaleX: useTransform(() => {
                const { width } = sliderRef.current
                  ? sliderRef.current.getBoundingClientRect()
                  : { width: 0 };

                return region === "left"
                  ? (width - x.get()) / width
                  : (width + x.get()) / width;
              }),
              transformOrigin: region === "left" ? "right" : "left",
            }}
            className="flex-1"
          >
            <Slider
              ref={sliderRef}
              value={[isMuted ? 0 : volume]}
              min={0}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="flex-1"
              onPointerMove={(e) => {
                const { left } = e.currentTarget.getBoundingClientRect();

                if (e.buttons > 0) {
                  position.set(e.clientX - left);
                }
              }}
              onLostPointerCapture={() => {
                animate(x, 0, { type: "spring", bounce: 0.2 });
              }}
            />
          </motion.div>

          <motion.div style={{ x: region === "right" ? x : 0 }}>
            <Button variant="destructive" size="icon" className="text-pink  ">
              <Volume2 className="h-10 w-10" />
              <span className="sr-only">Volume</span>
            </Button>
          </motion.div>
        </div>

        <div className="text-center text-white/90 text-lg">
          Volume: {isMuted ? 0 : volume}
        </div>
      </div>
    </div>
  );
}
