"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JOYS_INFO, NAV_LINKS } from "@/constants/info";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background-dark/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-primary font-mono text-xl font-bold border-2 border-primary px-2 py-1 cursor-pointer ml-1 md:ml-0"
        >
          J
        </motion.div>

        {/* Desktop Navigation */}
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

        {/* Mobile View Elements */}
        <div className="flex md:hidden items-center space-x-4">
          <motion.a
            href={JOYS_INFO.resume}
            className="border border-primary text-primary px-3 py-1.5 rounded-md font-mono text-xs hover:bg-primary-light transition-colors duration-300"
          >
            Resume
          </motion.a>
          
          <button 
            onClick={toggleMobileMenu}
            className="text-primary p-1"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-3/4 bg-background-light shadow-2xl z-50 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button 
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 text-primary"
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col items-center space-y-8">
              {NAV_LINKS.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-mono text-lg text-text-normal hover:text-primary transition-colors duration-300 flex flex-col items-center"
                  >
                    <span className="text-primary text-sm mb-1">0{index + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


