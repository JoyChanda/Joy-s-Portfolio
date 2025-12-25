"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThisCantBeReached() {
  const [phase, setPhase] = useState(1);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Phase 1: Error (0-2.5s)
    // Phase 2: Success Text (2.5s-5s)
    // Phase 3: Emoticon moves to center (5s+)
    const timer1 = setTimeout(() => setPhase(2), 2500);
    const timer2 = setTimeout(() => setPhase(3), 5000);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Standard Chrome error page layout constants
  const pagePadding = {
    top: windowSize.width > 768 ? 72 : 48,
    left: windowSize.width > 768 ? 96 : 32, // Adjusted for mobile realism
    maxWidth: 600
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 10, duration: 0.5 }}
      className="fixed inset-0 z-[110] bg-white overflow-hidden font-sans select-none"
    >
      <div className="relative w-full h-full">
        
        {/* The "Emoticon" (Dino-like) */}
        <motion.div
          animate={{
            x: phase < 3 ? pagePadding.left : windowSize.width / 2 - 20,
            y: phase < 3 ? pagePadding.top : windowSize.height / 2 - 80,
            scale: phase === 3 ? (windowSize.width > 768 ? 2.5 : 2) : 1,
          }}
          transition={{
            duration: 1.2,
            type: "spring",
            damping: 20,
            stiffness: 80,
          }}
          className="absolute z-20 flex flex-col items-center"
        >
          <div className="relative w-10 h-11">
            <div className="absolute h-1 w-1/2 bg-gray-600"></div>
            <div className="absolute h-full w-1 bg-gray-600"></div>
            <div className="absolute bottom-0 h-1 w-full bg-gray-600"></div>
            <div className="absolute right-0 bottom-0 h-6 w-1 bg-gray-600"></div>
            
            {/* Eyes */}
            <motion.div
              animate={{ scaleY: [1, 0, 1] }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
              className="absolute left-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
            />
            <motion.div
              animate={{ scaleY: [1, 0, 1] }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
              className="absolute right-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
            />

            {/* Mouth: Change from deep Sad Curve to Smile Curve */}
            <motion.div
              animate={{
                borderRadius: phase === 3 ? "0 0 100px 100px" : "40px 40px 0 0",
                height: phase === 3 ? "5px" : "4px",
                y: phase === 3 ? 4 : 2,
                scaleX: phase === 3 ? 1.4 : 0.8
              }}
              transition={{ duration: 0.8, type: "spring", damping: 12 }}
              className="absolute left-3 bottom-[12px] w-3.5 bg-gray-600"
            />
            
            {/* Props */}
            <div className="absolute right-4 top-0 h-[18px] w-1 bg-gray-600 rotate-[-90deg] translate-x-[9px] translate-y-[-7px]" />
            <div className="absolute right-0 top-[14px] h-1 w-4 bg-gray-600 rotate-[90deg] translate-x-[6px] translate-y-[-7px]" />
          </div>

          {/* "Hello!!!" dropdown from emoticon */}
          <AnimatePresence>
            {phase === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.2 }}
                animate={{ opacity: 1, y: 10, scale: 1 }} 
                transition={{ 
                  delay: 1.3,
                  duration: 0.6,
                  type: "spring",
                  damping: 15,
                  stiffness: 120
                }}
                className="mt-[-10px]" // Almost no gap now
              >
                <h2 className="text-[#3c4043] text-sm md:text-lg font-extrabold tracking-tight">
                  Hello!!!
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Browser Error Text Content (Left Aligned) */}
        <div 
          className="absolute pr-8" // Added right padding for mobile
          style={{ 
            top: pagePadding.top + (windowSize.width > 768 ? 70 : 60), 
            left: pagePadding.left,
            maxWidth: pagePadding.maxWidth 
          }}
        >
          <AnimatePresence mode="wait">
            {phase === 1 && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 md:space-y-6"
              >
                <h1 className="text-[#3c4043] text-[18px] md:text-[28px] font-normal leading-tight">
                  This site can&apos;t be reached
                </h1>
                <p className="text-[#5f6368] text-[13px] md:text-base leading-relaxed">
                  <span className="font-bold underline">www.joychanda.com</span> unexpectedly closed the connection.
                </p>
                <div className="space-y-4">
                  <span className="text-[#5f6368] text-[13px] md:text-base block">Try:</span>
                  <ul className="space-y-3 pl-4 text-[13px] md:text-base text-[#5f6368]">
                    <li className="flex items-center gap-3">
                      <span className="text-xl leading-none">&bull;</span> Checking the connection
                    </li>
                    <li className="flex items-center gap-3 text-[#1a73e8] cursor-pointer hover:underline">
                      <span className="text-[#5f6368] text-xl leading-none">&bull;</span> Checking the proxy and the firewall
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-[#70757a] text-[10px] md:text-[11px] font-mono uppercase tracking-wider mb-6">
                    ERR_CONNECTION_CLOSED
                  </p>
                  <button className="px-6 py-2 bg-[#1a73e8] rounded-[4px] text-white text-sm font-medium shadow-sm active:bg-[#1557b0] transition-colors">
                    Reload
                  </button>
                </div>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h1 className="text-[#3c4043] text-[20px] md:text-[28px] font-normal leading-tight">
                  This site <span className="font-bold">actually can</span> be reached
                </h1>
                <p className="text-[#5f6368] text-[13px] md:text-base leading-relaxed">
                  <span className="font-bold">www.joychanda.com</span> unexpectedly <span className="font-bold">opened</span> the connection.
                </p>
                <div className="space-y-4">
                  <span className="text-[#5f6368] text-[13px] md:text-base block">Try:</span>
                  <ul className="space-y-3 pl-4 text-[13px] md:text-base text-[#5f6368]">
                    <li className="flex items-center gap-3">
                      <span className="text-xl leading-none">&bull;</span> Checking the connection
                    </li>
                    <li className="flex items-center gap-3 text-[#1a73e8] cursor-pointer hover:underline">
                      <span className="text-[#5f6368] text-xl leading-none">&bull;</span> Checking the proxy and the firewall
                    </li>
                    <li className="flex items-center gap-3 text-[#1a73e8] cursor-pointer hover:underline">
                      <span className="text-[#5f6368] text-xl leading-none">&bull;</span> Running Windows Network Diagnostics
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-[#70757a] text-[10px] md:text-[11px] font-mono uppercase tracking-wider mb-6">
                    SUCC_CONNECTION_OPENED
                  </p>
                  <button className="px-6 py-2 bg-[#1a73e8] rounded-[4px] text-white text-sm font-medium shadow-sm active:bg-[#1557b0] transition-colors">
                    Start
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Final Bottom Text */}
        <AnimatePresence>
          {phase === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-16 md:bottom-24 left-0 right-0 flex justify-center"
            >
              <span className="text-gray-400 font-mono text-xs md:text-base tracking-[0.4em] md:tracking-[0.5em] uppercase text-center px-4 font-medium">
                Thanks for Visiting
              </span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
