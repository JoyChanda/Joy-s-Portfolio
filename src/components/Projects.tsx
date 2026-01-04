"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Zap, Target } from "lucide-react";
import { JOYS_INFO } from "@/constants/info";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof JOYS_INFO.projects[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-24 lg:px-48 bg-background-dark max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center mb-16"
      >
        <h2 className="text-text-bright text-2xl md:text-3xl font-bold flex items-center">
          <span className="text-primary font-mono text-xl mr-2">03.</span>
          Some Things I&apos;ve Built
        </h2>
        <div className="h-[1px] bg-text-dim/30 flex-grow ml-4 md:ml-8 max-w-xs"></div>
      </motion.div>

      <div className="space-y-32">
        {JOYS_INFO.projects?.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative grid grid-cols-1 md:grid-cols-12 items-center gap-4 group`}
          >
            {/* Project Image */}
            <div
              className={`md:col-span-7 relative ${
                index % 2 === 0 ? "md:order-1" : "md:order-2 md:col-start-6"
              }`}
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="block relative aspect-[16/10] bg-primary/10 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 rounded-lg scale-[0.98] group-hover:scale-100 p-2"
                />
              </div>
            </div>

            {/* Project Content */}
            <div
              className={`md:col-span-6 z-20 flex flex-col ${
                index % 2 === 0
                  ? "md:col-start-7 md:items-end text-right"
                  : "md:col-start-1 md:items-start text-left"
              }`}
            >
              <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
              <h3 className="text-text-bright text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedProject(project)}>
                {project.title}
              </h3>

              <div className="bg-background-light p-6 rounded-md shadow-xl text-text-dim text-md mb-4 border border-primary/10">
                <p>{project.description}</p>
              </div>

              <ul className={`flex flex-wrap gap-4 font-mono text-xs text-text-dim mb-6 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-primary border border-primary px-4 py-2 rounded font-mono text-xs hover:bg-primary-light transition-colors"
                >
                  View Details
                </button>
                <div className="flex gap-4 text-text-bright">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background-dark/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-background-light w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-primary/20 shadow-2xl p-6 md:p-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-text-dim hover:text-primary transition-colors p-2"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col space-y-8">
                <div>
                  <p className="text-primary font-mono text-sm mb-2">Project Showcase</p>
                  <h2 className="text-text-bright text-3xl md:text-4xl font-bold mb-4">{selectedProject.title}</h2>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>

                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-primary/10">
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    fill 
                    className="object-contain p-4 bg-background-dark/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-text-bright font-bold mb-3 flex items-center gap-2">
                        <Zap size={18} className="text-primary" />
                        Key Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, idx) => (
                          <span key={idx} className="bg-primary/5 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-text-bright font-bold mb-3">Description</h4>
                      <p className="text-text-dim leading-relaxed">{selectedProject.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-text-bright font-bold mb-3 flex items-center gap-2">
                        <Target size={18} className="text-primary" />
                        Challenges Faced
                      </h4>
                      <p className="text-text-dim text-sm leading-relaxed border-l-2 border-primary/30 pl-4 bg-primary/5 py-3 rounded-r">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-text-bright font-bold mb-3">Future Improvements</h4>
                      <p className="text-text-dim text-sm leading-relaxed italic pr-4">
                        {selectedProject.improvements}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-text-dim/10 flex flex-wrap gap-4">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-grow md:flex-grow-0 flex items-center justify-center gap-2 bg-text-bright text-background-dark px-6 py-3 rounded font-bold hover:bg-primary transition-colors"
                  >
                    <Github size={18} />
                    GitHub Repo
                  </a>
                  <a 
                    href={selectedProject.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-grow md:flex-grow-0 flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded font-bold hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
