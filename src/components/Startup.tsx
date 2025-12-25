"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Startup Animation Component
 * This component creates an animated logo that appears on page load
 * and then transitions to the top-left corner
 */
const Startup = () => {
  const [windowInfo, setWindowInfo] = useState({
    WidthBy2: 0,
    HeightBy2: 0,
    greaterThanSmall: false,
    isReady: false
  });

  useEffect(() => {
    const calculatePosition = () => {
      let w = 0;
      let h = 0;
      let g = false;

      if (typeof window !== "undefined") {
        if (window.innerWidth > 768) {
          w = window.innerWidth / 2 - 48 - 20;
          h = window.innerHeight / 2 - 44;
          g = true;
        } else {
          w = window.innerWidth / 2 - 28;
          h = window.innerHeight / 2 - 40;
        }
        setWindowInfo({
          WidthBy2: w,
          HeightBy2: h,
          greaterThanSmall: g,
          isReady: true
        });
      }
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);
    return () => window.removeEventListener("resize", calculatePosition);
  }, []);

  if (!windowInfo.isReady) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ opacity: { delay: 4.9, duration: 0 } }}
      className="fixed inset-0 z-[110] flex justify-center items-center bg-StartupBackground"
    >
      {/* Main container that will move to top-left */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, scale: "100%" }}
        animate={{
          opacity: [1, 0, 1],
          x: -windowInfo.WidthBy2,
          y: -windowInfo.HeightBy2,
          scale: windowInfo.greaterThanSmall ? "57%" : "50%",
        }}
        transition={{
          opacity: { delay: 3, duration: 1.5 },
          x: { duration: 0.5, delay: 4.5 },
          y: { duration: 0.5, delay: 4.5 },
          scale: { duration: 0.5, delay: 4.5 },
        }}
        className="relative h-24 w-24 flex justify-center items-center"
      >
        {/* Horizontal bar on the right */}
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: 38 }}
          transition={{
            scale: { duration: 1.5 },
            rotate: { delay: 0.5, duration: 0.5 },
            x: { delay: 0.8, duration: 1 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Horizontal bar on the left */}
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: -39 }}
          transition={{
            scale: { duration: 1.5 },
            rotate: { delay: 0.5, duration: 0.5 },
            x: { delay: 0.8, duration: 1 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Top-right diagonal bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: 18, y: -34 }}
          transition={{
            opacity: { delay: 2, duration: 0 },
            scale: { duration: 2.5 },
            rotate: { delay: 0.5, duration: 0.5 },
            y: { delay: 1.2, duration: 2 },
            x: { delay: 1.5, duration: 0.5 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Top-left diagonal bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: -18, y: -34 }}
          transition={{
            opacity: { delay: 2, duration: 0 },
            scale: { duration: 2.5 },
            rotate: { delay: 0.5, duration: 0.5 },
            y: { delay: 1.2, duration: 2 },
            x: { delay: 1.5, duration: 0.5 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Bottom-right diagonal bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: 18, y: 34 }}
          transition={{
            opacity: { delay: 2, duration: 0 },
            scale: { duration: 2.5 },
            rotate: { delay: 0.5, duration: 0.5 },
            y: { delay: 1.2, duration: 2 },
            x: { delay: 1.5, duration: 0.5 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Bottom-left diagonal bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: -18, y: 34 }}
          transition={{
            opacity: { delay: 2, duration: 0 },
            scale: { duration: 2.5 },
            rotate: { delay: 0.5, duration: 0.5 },
            y: { delay: 1.2, duration: 2 },
            x: { delay: 1.5, duration: 0.5 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Letter in the center */}
        <motion.span
          initial={{ scale: 0, y: -4, x: -1 }}
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 1.5, duration: 1.5 } }}
          className="text-AAsecondary font-bold text-4xl"
          style={{ fontFamily: '"Lato", sans-serif' }}
        >
          J
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Startup;
