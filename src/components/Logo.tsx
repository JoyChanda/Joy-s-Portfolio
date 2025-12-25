"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Logo({ className = "", size = "small", onClick }: { className?: string, size?: "small" | "large", onClick?: () => void }) {
  const isLarge = size === "large";
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative cursor-pointer flex items-center justify-center ${isLarge ? "h-24 w-24" : "h-12 w-12"} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 5L90 25V75L50 95L10 75V25L50 5Z"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="50"
          y="65"
          textAnchor="middle"
          className="fill-current font-mono text-5xl font-bold"
        >
          J
        </text>
      </svg>
    </motion.div>
  );
}
