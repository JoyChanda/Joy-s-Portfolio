"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { JOYS_INFO } from "@/constants/info";

export default function SocialBar() {
  const socials = [
    { icon: <Github size={20} />, href: JOYS_INFO.socials.github },
    { icon: <Linkedin size={20} />, href: JOYS_INFO.socials.linkedin },
    { icon: <Twitter size={20} />, href: JOYS_INFO.socials.twitter },
    { icon: <Facebook size={20} />, href: JOYS_INFO.socials.facebook },
    { icon: <Instagram size={20} />, href: JOYS_INFO.socials.instagram },
  ];

  return (
    <>
      {/* Left side socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 left-10 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-text-dim after:mt-6"
      >
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: "var(--color-primary)" }}
            className="text-text-dim transition-all duration-300"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Right side email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 right-10 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-text-dim after:mt-6"
      >
        <motion.a
          href={`mailto:${JOYS_INFO.email}`}
          whileHover={{ y: -4, color: "var(--color-primary)" }}
          className="font-mono text-sm tracking-widest text-text-dim [writing-mode:vertical-rl] transition-all duration-300"
        >
          {JOYS_INFO.email}
        </motion.a>
      </motion.div>
    </>
  );
}
