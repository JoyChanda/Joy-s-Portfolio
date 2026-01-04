"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { JOYS_INFO } from "@/constants/info";

export default function About() {
  return (
    <section id="about" className="py-24 pt-48 md:pt-24 px-6 md:px-24 lg:px-48 bg-background-dark max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center mb-10"
      >
        <h2 className="text-text-bright text-2xl md:text-3xl font-bold flex items-center">
          <span className="text-primary font-mono text-xl mr-2">01.</span>
          About Me
        </h2>
        <div className="h-[1px] bg-text-dim/30 flex-grow ml-4 md:ml-8 max-w-xs"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Text Section */}
        <div className="md:col-span-2 order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-dim text-lg leading-relaxed space-y-4"
          >
            <p>
              Hello! My name is <span className="text-primary">Joy Chanda</span>. {JOYS_INFO.about.journey}
            </p>
            <p>
              {JOYS_INFO.about.workPreference}
            </p>
            <p>
              {JOYS_INFO.about.hobbies}
            </p>
            <p>
              I am confident in my ability to adapt to new environments and support the team with my capabilities. 
              My objective is to grow through continuous learning, enabling me to contribute to the company's success.
            </p>
          </motion.div>
        </div>

        {/* Image Section - Right on Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative group block mx-auto md:mx-0 w-64 h-64 md:w-full md:h-auto md:aspect-square order-2"
        >
          <div className="relative z-10 w-full aspect-square border-2 border-primary rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <Image 
                src="/JC.png" 
                alt="Joy Chanda" 
                fill
                className="object-cover transition-all duration-300"
              />
            </div>
          </div>
          <div className="absolute top-4 left-4 -z-0 w-full aspect-square border-2 border-primary/30 bg-primary/5 rounded-md group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
}
