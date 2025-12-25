"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThisCantBeReached() {
  const [showText, setShowText] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getCenterOffset = () => {
    if (dimensions.width === 0) return { x: 0, y: 0 };
    
    let x = 0;
    let y = 0;
    
    // Adjust y to center vertically in available space
    if (dimensions.height > 640) y = dimensions.height / 2 - 180;
    else y = dimensions.height / 2 - 100;

    // Adjust x to center horizontally in available space (considering px-6 padding)
    if (dimensions.width > 1280) x = dimensions.width / 2 - 402;
    else if (dimensions.width > 1024) x = dimensions.width / 2 - 210;
    else if (dimensions.width > 768) x = dimensions.width / 2 - 162;
    else if (dimensions.width > 640) x = dimensions.width / 2 - 114;
    else x = (dimensions.width - 48) / 2 - 18; // 48 is px-6 total, 18 is half of dino width

    return { x, y };
  };

  const { x, y } = getCenterOffset();

  // Don't render until dimensions are set to avoid flashing at wrong positions
  if (dimensions.width === 0) return <div className="fixed inset-0 bg-white z-[100]" />;


  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-white px-6 py-20 md:px-24 lg:px-48 flex flex-col space-y-10 overflow-hidden"
    >
      <div className="relative w-full flex flex-col space-y-4">
        <motion.div
          animate={{ y, x, scale: 2 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative w-9 h-10"
        >
          {/* Chrome Dino-style Sad Face */}
          <div className="absolute h-1 w-1/2 bg-gray-600"></div>
          <div className="absolute h-full w-1 bg-gray-600"></div>
          <div className="absolute bottom-0 h-1 w-full bg-gray-600"></div>
          <div className="absolute right-0 bottom-0 h-6 w-1 bg-gray-600"></div>

          {/* Eyes */}
          <motion.div
            animate={{ scaleY: [1, 0, 1, 0, 1] }}
            transition={{ delay: 1.5, duration: 1, repeat: 1 }}
            className="absolute left-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
          ></motion.div>
          <motion.div
            animate={{ scaleY: [1, 0, 1, 0, 1] }}
            transition={{ delay: 1.5, duration: 1, repeat: 1 }}
            className="absolute right-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
          ></motion.div>

          {/* Ear-like corner animation */}
          <motion.div
            animate={{ rotate: -90, x: 9, y: -7 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute right-4 top-0 h-[18px] w-1 bg-gray-600"
          ></motion.div>
          <motion.div
            animate={{ rotate: 90, x: 6, y: -7 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute right-0 top-[14px] h-1 w-4 bg-gray-600"
          ></motion.div>

          {/* Mouth */}
          <div className="absolute left-3 bottom-[10px] w-3 h-[3px] bg-gray-600"></div>
        </motion.div>

        <motion.span
          initial={{ y: y + 55, x: x - 10, opacity: 0 }}
          animate={{ y: y + 75, opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.3 }}
          className="absolute font-bold text-gray-600 text-2xl whitespace-nowrap"
        >
          Hello!
        </motion.span>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="w-full flex flex-col space-y-8"
        >
          <h1 className="text-gray-600 text-2xl">
            This site {showText ? <span className="font-bold">actually can</span> : <span>can&apos;t</span>} be reached
          </h1>
          <p className="text-gray-500 text-md">
            <span className="font-bold underline text-blue-600">www.joychanda.com</span> unexpectedly{" "}
            {showText ? <span className="font-bold">opened</span> : <span>closed</span>} the connection.
          </p>
          
          <div className="flex flex-col space-y-3">
            <span className="text-gray-400 text-lg">Try:</span>
            <ul className="flex flex-col space-y-2 pl-10 text-gray-400">
              <li>&bull; Checking the connection</li>
              <li className="text-blue-500">&bull; Checking the proxy and the firewall</li>
              <li className="text-blue-500">&bull; Running Windows Network Diagnostics</li>
            </ul>
          </div>

          <span className="text-gray-400 text-sm font-mono">
            {showText ? "SUCC_CONNECTION_OPENED" : "ERR_CONNECTION_CLOSED"}
          </span>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <button className="px-6 py-2 bg-blue-600 rounded text-white font-medium">
          {showText ? "Start" : "Reload"}
        </button>
      </motion.div>
    </motion.div>
  );
}
