"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { JOYS_INFO } from "@/constants/info";

export default function Education() {
  return (
    <section id="experience" className="py-24 px-6 md:px-24 lg:px-48 bg-background-dark max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center mb-16"
      >
        <h2 className="text-text-bright text-2xl md:text-3xl font-bold flex items-center">
          <span className="text-primary font-mono text-xl mr-2">04.</span>
          Education
        </h2>
        <div className="h-[1px] bg-text-dim/30 flex-grow ml-4 md:ml-8 max-w-xs"></div>
      </motion.div>

      <div className="space-y-12 relative before:content-[''] before:absolute before:left-0 md:before:left-1/2 md:before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary/20">
        {JOYS_INFO.education?.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot on timeline */}
            <div className="absolute left-[1px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 border-4 border-background-dark shadow-[0_0_10px_rgba(100,255,218,0.5)]"></div>

            {/* Content Card */}
            <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
              <div className="bg-background-light p-6 rounded-lg border border-primary/10 hover:border-primary/40 transition-all duration-300 shadow-xl group">
                <div className={`flex items-center mb-2 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <GraduationCap className="text-primary mr-3 ml-3" size={24} />
                  <h3 className="text-text-bright text-xl font-bold group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                </div>
                
                <h4 className="text-text-normal font-medium mb-3">{edu.institution}</h4>
                
                <div className={`flex items-center text-text-dim text-sm mb-4 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <Calendar size={14} className="mr-2 ml-2" />
                  <span>Passing Year: {edu.year}</span>
                </div>

                <div className={`p-3 rounded bg-background-dark/50 border-l-2 border-primary text-text-dim text-sm italic`}>
                  {edu.details}
                </div>
              </div>
            </div>

            {/* Empty space for the other side on desktop */}
            <div className="hidden md:block w-[45%]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
