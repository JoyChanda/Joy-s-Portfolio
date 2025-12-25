"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { JOYS_INFO } from "@/constants/info";

export default function Projects() {
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
          <span className="text-primary font-mono text-xl mr-2">02.</span>
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
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] bg-primary/10 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-lg scale-105 group-hover:scale-100"
                />
              </a>
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
              <h3 className="text-text-bright text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>

              <div className="bg-background-light p-6 rounded-md shadow-xl text-text-dim text-md mb-4 border border-primary/10">
                <p>{project.description}</p>
              </div>

              <ul className="flex flex-wrap gap-4 font-mono text-xs text-text-dim mb-6">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div className="flex gap-4 text-text-bright">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
