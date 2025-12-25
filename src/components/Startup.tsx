"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Startup() {
  const [offsets, setOffsets] = useState({ x: 0, y: 0, small: false });

  useEffect(() => {
    const updateOffsets = () => {
      if (window.innerWidth > 768) {
        setOffsets({
          x: window.innerWidth / 2 - 68,
          y: window.innerHeight / 2 - 44,
          small: false
        });
      } else {
        setOffsets({
          x: window.innerWidth / 2 - 28,
          y: window.innerHeight / 2 - 40,
          small: true
        });
      }
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4.9, duration: 0.1 }}
      className="fixed inset-0 z-[110] flex justify-center items-center bg-[#020c1b]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ 
          opacity: [1, 0, 1], 
          x: -offsets.x, 
          y: -offsets.y, 
          scale: offsets.small ? 0.5 : 0.57 
        }}
        transition={{
          opacity: { delay: 3, duration: 1.5 },
          x: { duration: 0.5, delay: 4.5 },
          y: { duration: 0.5, delay: 4.5 },
          scale: { duration: 0.5, delay: 4.5 },
        }}
        className="relative h-24 w-24 flex justify-center items-center"
      >
        {/* Hexagon/Logo parts */}
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1, rotate: 90, x: 38 }}
          transition={{ scale: { duration: 1.5 }, rotate: { delay: 0.5, duration: 0.5 }, x: { delay: 0.8, duration: 1 } }}
          className="absolute h-2 w-12 bg-primary rounded"
        />
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1, rotate: 90, x: -39 }}
          transition={{ scale: { duration: 1.5 }, rotate: { delay: 0.5, duration: 0.5 }, x: { delay: 0.8, duration: 1 } }}
          className="absolute h-2 w-12 bg-primary rounded"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1.05, rotate: 35, x: 18, y: -34 }}
          transition={{ opacity: { delay: 2 }, scale: { duration: 2.5 }, rotate: { delay: 0.5, duration: 0.5 }, y: { delay: 1.2, duration: 2 }, x: { delay: 1.5 } }}
          className="absolute h-2 w-12 bg-primary rounded"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1.05, rotate: -35, x: -18, y: -34 }}
          transition={{ opacity: { delay: 2 }, scale: { duration: 2.5 }, rotate: { delay: 0.5, duration: 0.5 }, y: { delay: 1.2, duration: 2 }, x: { delay: 1.5 } }}
          className="absolute h-2 w-12 bg-primary rounded"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1.05, rotate: -35, x: 18, y: 34 }}
          transition={{ opacity: { delay: 2 }, scale: { duration: 2.5 }, rotate: { delay: 0.5, duration: 0.5 }, y: { delay: 1.2, duration: 2 }, x: { delay: 1.5 } }}
          className="absolute h-2 w-12 bg-primary rounded"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1.05, rotate: 35, x: -18, y: 34 }}
          transition={{ opacity: { delay: 2 }, scale: { duration: 2.5 }, rotate: { delay: 0.5, duration: 0.5 }, y: { delay: 1.2, duration: 2 }, x: { delay: 1.5 } }}
          className="absolute h-2 w-12 bg-primary rounded"
        />
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 1.5, duration: 1.5 } }}
          className="text-primary text-4xl font-bold font-mono"
        >
          J
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
