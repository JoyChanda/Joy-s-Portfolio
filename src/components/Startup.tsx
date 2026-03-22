"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Startup Animation Component
 * This component creates an animated logo that appears on page load
 * and then transitions to the top-left corner
 */
const Startup = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
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

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    setParallax({
      x: ((e.clientX - cx) / r.width) * 14,
      y: ((e.clientY - cy) / r.height) * 14,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ opacity: { delay: 1.9, duration: 0 } }}
      onPointerMove={onPointerMove}
      className="fixed inset-0 z-[110] flex flex-col justify-center items-center gap-10 bg-StartupBackground"
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
          opacity: { delay: 1.4, duration: 0.5 },
          x: { duration: 0.5, delay: 1.5 },
          y: { duration: 0.5, delay: 1.5 },
          scale: { duration: 0.5, delay: 1.5 },
        }}
        className="relative h-24 w-24 flex justify-center items-center"
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
        {/* Horizontal bar on the right */}
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: 38 }}
          transition={{
            scale: { duration: 0.5 },
            rotate: { delay: 0.2, duration: 0.4 },
            x: { delay: 0.3, duration: 0.4 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Horizontal bar on the left */}
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: -39 }}
          transition={{
            scale: { duration: 0.5 },
            rotate: { delay: 0.2, duration: 0.4 },
            x: { delay: 0.3, duration: 0.4 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Top-right diagonal bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: 18, y: -34 }}
          transition={{
            opacity: { delay: 0.7, duration: 0 },
            scale: { duration: 1.0 },
            rotate: { delay: 0.3, duration: 0.4 },
            y: { delay: 0.5, duration: 0.5 },
            x: { delay: 0.5, duration: 0.4 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Top-left diagonal bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: -18, y: -34 }}
          transition={{
            opacity: { delay: 0.7, duration: 0 },
            scale: { duration: 1.0 },
            rotate: { delay: 0.3, duration: 0.4 },
            y: { delay: 0.5, duration: 0.5 },
            x: { delay: 0.5, duration: 0.4 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Bottom-right diagonal bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: 18, y: 34 }}
          transition={{
            opacity: { delay: 0.7, duration: 0 },
            scale: { duration: 1.0 },
            rotate: { delay: 0.3, duration: 0.4 },
            y: { delay: 0.5, duration: 0.5 },
            x: { delay: 0.5, duration: 0.4 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Bottom-left diagonal bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: -18, y: 34 }}
          transition={{
            opacity: { delay: 0.7, duration: 0 },
            scale: { duration: 1.0 },
            rotate: { delay: 0.3, duration: 0.4 },
            y: { delay: 0.5, duration: 0.5 },
            x: { delay: 0.5, duration: 0.4 },
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>

        {/* Letter in the center */}
        <motion.span
          initial={{ scale: 0, y: -4, x: -1 }}
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 0.8, duration: 0.6 } }}
          className="text-AAsecondary font-bold text-4xl"
          style={{ fontFamily: '"Lato", sans-serif' }}
        >
          J
        </motion.span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, -4] }}
        transition={{
          duration: 1.45,
          times: [0, 0.12, 0.72, 1],
          ease: "easeOut",
        }}
        className="pointer-events-none font-mono text-[10px] uppercase tracking-[0.4em] text-text-dim md:text-xs"
      >
        Preparing workspace
      </motion.p>
    </motion.div>
  );
};

export default Startup;
