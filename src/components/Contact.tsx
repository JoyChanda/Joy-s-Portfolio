"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { JOYS_INFO } from "@/constants/info";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-24 lg:px-48 bg-background-dark max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mb-10"
      >
        <span className="text-primary font-mono text-xl mr-2">04.</span>
        <h2 className="text-text-bright text-2xl md:text-3xl font-bold">What&apos;s Next?</h2>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-text-bright text-4xl md:text-5xl font-bold mb-6"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-text-dim text-lg mb-12 max-w-lg mx-auto"
      >
        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
        I&apos;ll try my best to get back to you!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href={`mailto:${JOYS_INFO.email}`}
          className="inline-flex items-center border-2 border-primary text-primary px-10 py-4 rounded-md font-mono text-lg hover:bg-primary-light transition-colors duration-300"
        >
          <Mail className="mr-2" size={20} />
          Say Hello
        </a>
      </motion.div>

      <footer className="mt-32 pt-8 border-t border-text-dim/10">
        <p className="text-text-dim font-mono text-sm">
          Designed & Built by <span className="text-primary">Joy Chanda</span>
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-text-dim md:hidden">
          {/* Mobile only social links could go here */}
        </div>
      </footer>
    </section>
  );
}
