"use client";
import React from "react";
import { motion } from "framer-motion";
import { JOYS_INFO } from "@/constants/info";

export default function About() {
  const allSkills = [
    ...JOYS_INFO.skills.web,
    ...JOYS_INFO.skills.frameworks,
    ...JOYS_INFO.skills.database,
    ...JOYS_INFO.skills.tools,
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-dim text-lg leading-relaxed space-y-4"
          >
            <p>
              Hello! My name is <span className="text-primary">Joy Chanda</span>. I aspire to work in a professional, 
              goal-oriented organization where I can effectively apply my knowledge and skills.
            </p>
            <p>
              I am confident in my ability to adapt to new environments and support the team with my capabilities. 
              My objective is to grow through continuous learning, enabling me to contribute to the company's success.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
              {allSkills.slice(0, 10).map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-primary text-[10px]">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#work"
                className="inline-block border border-primary text-primary px-6 py-3 rounded-md font-mono text-sm hover:bg-primary-light transition-colors duration-300"
              >
                Check out my work!
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative group hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square border-2 border-primary rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
             {/* This would be your image. Using a placeholder color for now */}
            <div className="w-full h-full bg-primary/20 rounded-md"></div>
          </div>
          <div className="absolute top-4 left-4 -z-0 w-full aspect-square border-2 border-primary/30 rounded-md group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Languages & UI/UX Card */}
        <div className="p-6 rounded-lg bg-background-light border border-text-dim/10 hover:border-primary/50 transition-colors duration-300">
          <h3 className="text-text-bright font-bold mb-4 text-xl">Other Skills</h3>
          <div className="space-y-4">
            <div>
              <p className="text-primary font-mono text-xs mb-2 uppercase tracking-widest">Languages</p>
              <div className="flex flex-wrap gap-2 text-sm text-text-dim">
                {JOYS_INFO.skills.languages.join(", ")}
              </div>
            </div>
            <div>
              <p className="text-primary font-mono text-xs mb-2 uppercase tracking-widest">UI/UX Design</p>
              <div className="flex flex-wrap gap-2 text-sm text-text-dim">
                {JOYS_INFO.skills.uiux.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
