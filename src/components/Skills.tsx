"use client";
import React from "react";
import { motion } from "framer-motion";
import { JOYS_INFO } from "@/constants/info";

export default function Skills() {
  const categories = [
    { title: "Frontend Development", skills: JOYS_INFO.skills.frontend },
    { title: "Backend & Database", skills: JOYS_INFO.skills.backend },
    { title: "Tools & Design", skills: JOYS_INFO.skills.tools },
    { title: "Languages", skills: JOYS_INFO.skills.languages },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-24 lg:px-48 bg-background-dark max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center mb-16"
      >
        <h2 className="text-text-bright text-2xl md:text-3xl font-bold flex items-center">
          <span className="text-primary font-mono text-xl mr-2">02.</span>
          Technical Skills
        </h2>
        <div className="h-[1px] bg-text-dim/30 flex-grow ml-4 md:ml-8 max-w-xs"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, x: catIdx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            viewport={{ once: true }}
            className="bg-background-light p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-xl"
          >
            <h3 className="text-text-bright font-bold mb-8 text-xl flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              {category.title}
            </h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-normal font-mono text-sm group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-primary font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background-dark rounded-full overflow-hidden border border-primary/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + skillIdx * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 h-full w-2 bg-white/20 blur-[1px]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
