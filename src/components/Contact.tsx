"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, ExternalLink } from "lucide-react";
import { JOYS_INFO, NAV_LINKS } from "@/constants/info";

const WhatsAppIcon = ({ size }: { size: number }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.8-17-41.1-4.5-10.9-9.1-9.4-12.4-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
  </svg>
);

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-24 px-6 md:px-24 lg:px-48 bg-background-dark max-w-6xl mx-auto">
      {/* 1. Header / Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-text-bright text-3xl md:text-4xl font-bold">Get In Touch</h2>
        </div>
        <p className="text-text-dim text-lg max-w-lg mx-auto">
          Feel free to reach out for collaborations, projects, or any questions. 
          I&apos;m currently seeking new opportunities!
        </p>
      </motion.div>

      {/* 2. Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-start space-x-4 group">
            <div className="p-3 bg-background-light rounded-lg border border-primary/10 group-hover:border-primary/50 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="text-text-bright font-bold mb-1">Email</h4>
              <a href={`mailto:${JOYS_INFO.email}`} className="text-text-dim hover:text-primary transition-colors">
                {JOYS_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="p-3 bg-background-light rounded-lg border border-primary/10 group-hover:border-primary/50 transition-colors">
              <Phone className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="text-text-bright font-bold mb-1">Phone</h4>
              <p className="text-text-dim">{JOYS_INFO.contactDetails.phone}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="p-3 bg-background-light rounded-lg border border-primary/10 group-hover:border-primary/50 transition-colors">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="text-text-bright font-bold mb-1">Location</h4>
              <p className="text-text-dim">{JOYS_INFO.contactDetails.location}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="p-3 bg-background-light rounded-lg border border-primary/10 group-hover:border-primary/50 transition-colors">
              <Clock className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="text-text-bright font-bold mb-1">Availability</h4>
              <p className="text-primary text-sm font-mono mt-1 italic">
                {JOYS_INFO.contactDetails.availability}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Social / Action Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background-light p-8 rounded-xl border border-primary/10 shadow-2xl flex flex-col items-center text-center group"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
             <Mail className="text-primary" size={40} />
          </div>
          <h3 className="text-text-bright text-2xl font-bold mb-4">Start a Conversation</h3>
          <p className="text-text-dim mb-8">
            The quickest way to reach me is via email. Let&apos;s build something amazing together!
          </p>
          <a
            href={`mailto:${JOYS_INFO.email}`}
            className="w-full inline-block border-2 border-primary text-primary px-8 py-4 rounded-md font-mono text-lg hover:bg-primary-light transition-all duration-300 transform hover:-translate-y-1"
          >
            Say Hello
          </a>

          <div className="flex space-x-6 mt-10">
            <a href={JOYS_INFO.socials.github} target="_blank" rel="noreferrer" className="text-text-dim hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href={JOYS_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-text-dim hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={JOYS_INFO.socials.whatsapp} target="_blank" rel="noreferrer" className="text-text-dim hover:text-primary transition-colors">
              <WhatsAppIcon size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* 5. Footer */}
      <footer className="mt-32 pt-10 border-t border-text-dim/10 flex flex-col items-center">
        <ul className="flex items-center space-x-6 md:space-x-8 mb-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-text-dim hover:text-primary text-sm font-mono transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-center space-y-2">
          <p className="text-text-dim font-mono text-xs md:text-sm">
            Designed & Built by <span className="text-primary font-bold">Joy Chanda</span>
          </p>
          <p className="text-text-dim/60 font-mono text-[10px] md:text-xs">
            © {currentYear} All Rights Reserved.
          </p>
        </div>

        <motion.div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-8 cursor-pointer group flex flex-col items-center"
        >
          <div className="text-primary font-mono text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Back to Top</div>
          <div className="w-10 h-10 border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
            <span className="text-primary transform group-hover:-translate-y-1 transition-transform">↑</span>
          </div>
        </motion.div>
      </footer>
    </section>
  );
}
