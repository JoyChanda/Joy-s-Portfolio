"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-48 bg-background-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-primary font-mono mb-5 block text-lg">Hi, my name is</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-text-bright text-5xl md:text-7xl font-bold mb-4"
      >
        Joy Chanda.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col md:flex-row items-start md:items-center mb-8 space-y-2 md:space-y-0"
      >
        <h2 className="text-text-dim text-4xl md:text-6xl font-bold mr-3 whitespace-nowrap leading-tight">
          I am
        </h2>
        <div className="h-[40px] md:h-[70px] flex items-center pt-1 md:pt-2">
          <img 
            src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=42&pause=1200&color=64ffda&center=false&vCenter=true&width=650&lines=a+Frontend+Developer;a+MERN+Stack+Developer;a+UI%2FUX+Designer;Designing+Clean+User+Experiences" 
            alt="Typing Animation"
            className="h-full w-auto object-contain"
          />
        </div>
      </motion.div>



      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-text-dim text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
      >
        I aspire to work in a professional, goal-oriented organization where I can effectively apply my knowledge and skills. 
        I am confident in my ability to adapt to new environments and support the team with my capabilities. 
        My objective is to grow through continuous learning, enabling me to contribute to the company's success.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="#projects"
          className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-md font-mono hover:bg-primary-light transition-colors duration-300"
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
}
