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

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5.2, duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-white px-6 py-20 md:px-24 lg:px-48 flex flex-col overflow-hidden"
    >
      <div className="relative w-full h-full flex flex-col items-start justify-start">
        {/* Centered Animation Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ y: 0, x: -dimensions.width / 2 + (dimensions.width > 768 ? 130 : 50), scale: 1 }}
            animate={{ y: -40, x: 0, scale: 2 }}
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
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ delay: 3.2, duration: 0.5 }}
            className="font-bold text-gray-600 text-3xl mt-4"
          >
            Hello!
          </motion.span>
        </div>

        {/* Existing Content */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="w-full flex flex-col space-y-8"
        >
          <div className="flex flex-col space-y-4">
             <h1 className="text-gray-600 text-2xl">
              This site {showText ? <span className="font-bold">actually can</span> : <span>can&apos;t</span>} be reached
            </h1>
            <p className="text-gray-500 text-md">
              <span className="font-bold underline text-blue-600">www.joychanda.com</span> unexpectedly{" "}
              {showText ? <span className="font-bold">opened</span> : <span>closed</span>} the connection.
            </p>
          </div>
          
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
          
          <div className="mt-10">
            <button className="px-6 py-2 bg-blue-600 rounded text-white font-medium">
              {showText ? "Start" : "Reload"}
            </button>
          </div>
        </motion.div>

        {/* Thanks for Visiting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center w-full"
        >
          <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">
            Thanks for Visiting
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
