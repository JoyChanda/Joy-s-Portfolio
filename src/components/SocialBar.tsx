"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { JOYS_INFO } from "@/constants/info";

const WhatsAppIcon = ({ size }: { size: number }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.8-17-41.1-4.5-10.9-9.1-9.4-12.4-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
  </svg>
);

export default function SocialBar() {
  const socials = [
    { icon: <Github size={20} />, href: JOYS_INFO.socials.github },
    { icon: <Linkedin size={20} />, href: JOYS_INFO.socials.linkedin },
    { icon: <WhatsAppIcon size={20} />, href: JOYS_INFO.socials.whatsapp },
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
