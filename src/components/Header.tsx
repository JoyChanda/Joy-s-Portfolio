"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { JOYS_INFO, NAV_LINKS } from "@/constants/info";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background-dark/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-primary font-mono text-xl font-bold border-2 border-primary px-2 py-1"
        >
          J
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="font-mono text-sm text-text-normal hover:text-primary transition-colors duration-300"
                >
                  <span className="text-primary mr-2">0{index + 1}.</span>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href={JOYS_INFO.resume}
            className="border border-primary text-primary px-4 py-2 rounded-md font-mono text-sm hover:bg-primary-light transition-colors duration-300"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile menu button could go here */}
      </nav>
    </motion.header>
  );
}
