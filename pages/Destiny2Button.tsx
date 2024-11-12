import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SplittingDiv = () => {
  useEffect(() => {
    const AppearingBoxTimeout = setTimeout(() => {
      if (appearingBoxRef.current) {
        appearingBoxRef.current.style.opacity = "0";
      }
    }, 1000);
    const disappearingBoxTimeout = setTimeout(() => {
      if (disappearingBoxRef.current) {
        disappearingBoxRef.current.style.opacity = "1";
      }
    }, 1000);
    return () => {
      clearTimeout(disappearingBoxTimeout);
      clearTimeout(AppearingBoxTimeout);
    };
  }, []);

  const appearingBoxRef = useRef<HTMLDivElement>(null);
  const disappearingBoxRef = useRef<HTMLDivElement>(null);
  const variants = {
    initial: { translateX: 0 },
    animate: { translateX: "-290px" },
  };

  const variants2 = {
    initial: { translateX: 0 },
    animate: { translateX: "290px" },
  };

  return (
    <div className="h-lvh flex justify-center items-center">
      <div className="relative flex justify-center items-center h-16">
        <motion.div
          ref={appearingBoxRef}
          className="bg-yellow-500 h-full absolute"
          initial={{ width: 0 }}
          animate={{ width: "400px" }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        />
        <motion.div
          ref={disappearingBoxRef}
          className="relative opacity-0 h-full flex w-[400px] overflow-hidden"
        >
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.4, ease: "easeOut", delay: 1.1 }}
            className="w-1/2 h-full bg-yellow-500"
          />
          <motion.div
            variants={variants2}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.4, ease: "easeOut", delay: 1.1 }}
            className="w-1/2 h-full bg-yellow-500"
          />
          <div className="absolute  -z-10 flex text-2xl tracking-[10px] justify-center items-center w-full h-full text-yellow-500 border border-yellow-500">
            SUPER CHARGED
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SplittingDiv;
