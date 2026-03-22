"use client";
import React from "react";
import { motion } from "framer-motion";
import { JOYS_INFO } from "@/constants/info";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 md:pt-0 px-6 md:px-24 lg:px-48 bg-background-dark">
      <motion.div custom={0} variants={reveal} initial="hidden" animate="show">
        <span className="text-primary font-mono mb-5 block text-lg">Hi, my name is</span>
      </motion.div>

      <motion.h1
        custom={1}
        variants={reveal}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.01 }}
        transition={{ scale: { type: "spring", stiffness: 400, damping: 25 } }}
        className="text-5xl md:text-7xl font-bold mb-4 cursor-default bg-gradient-to-r from-text-bright via-primary/80 to-primary bg-clip-text text-transparent"
      >
        Joy Chanda.
      </motion.h1>

      <motion.div
        custom={2}
        variants={reveal}
        initial="hidden"
        animate="show"
        className="flex flex-col md:flex-row items-start md:items-center mb-8 space-y-2 md:space-y-0"
      >
        <h2 className="text-text-dim text-4xl md:text-6xl font-bold mr-3 whitespace-nowrap leading-tight">
          I am
        </h2>
        <div className="h-[40px] md:h-[70px] flex items-center pt-1 md:pt-2 rounded-md ring-1 ring-transparent hover:ring-primary/20 transition-[box-shadow] duration-300 hover:shadow-[0_0_40px_-10px_rgba(100,255,218,0.25)]">
          <img 
            src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=42&pause=1200&color=64ffda&center=false&vCenter=true&width=650&lines=a+Frontend+Developer;a+MERN+Stack+Developer;a+UI%2FUX+Designer" 
            alt="Typing Animation"
            className="h-full w-auto object-contain"
          />
        </div>
      </motion.div>

      <motion.p
        custom={3}
        variants={reveal}
        initial="hidden"
        animate="show"
        className="text-text-dim text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
      >
        I aspire to work in a professional, goal-oriented organization where I can effectively apply my knowledge and skills. 
        I am confident in my ability to adapt to new environments and support the team with my capabilities. 
        My objective is to grow through continuous learning, enabling me to contribute to the company's success.
      </motion.p>

      <motion.div
        custom={4}
        variants={reveal}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-4"
      >
        <motion.a
          href={JOYS_INFO.resume}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, boxShadow: "0 14px 40px -12px rgba(100, 255, 218, 0.35)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-md font-mono bg-transparent hover:bg-primary-light transition-colors duration-300"
        >
          Download Resume
        </motion.a>
        <motion.a
          href="#work"
          whileHover={{ y: -3, boxShadow: "0 14px 40px -14px rgba(100, 255, 218, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-primary/10 text-primary px-8 py-4 rounded-md font-mono border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
        >
          Check out my work!
        </motion.a>
      </motion.div>
    </section>
  );
}
