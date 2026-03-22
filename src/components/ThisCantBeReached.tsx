"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 28, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ThisCantBeReached() {
  const [glow, setGlow] = useState({ x: 50, y: 45 });

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }, []);

  const welcome = "Welcome";

  return (
    <div
      onPointerMove={onPointerMove}
      className="fixed inset-0 z-[110] select-none overflow-hidden bg-StartupBackground"
    >
      {/* Interactive spotlight — follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(ellipse 90% 70% at ${glow.x}% ${glow.y}%, rgba(100, 255, 218, 0.11), transparent 55%)`,
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(100, 255, 218, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 218, 0.4) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 pb-20 pt-12 md:px-12">
        {/* Corner accents */}
        <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-AAsecondary/35 md:left-10 md:top-10" />
        <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-AAsecondary/35 md:bottom-10 md:right-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-text-dim md:text-xs md:tracking-[0.45em]"
          >
            Welcome to Joy Chanda's World
          </motion.p>

          <div className="mb-2 flex flex-wrap justify-center gap-[0.12em] perspective-[800px] md:gap-[0.08em]">
            {welcome.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-5xl font-semibold text-text-bright md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-about), serif" }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              delay: 0.65,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-8 h-px w-24 origin-center bg-gradient-to-r from-transparent via-AAsecondary to-transparent md:w-32"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.55 }}
            className="mx-auto max-w-md text-base leading-relaxed text-text-normal md:text-lg"
          >
            Glad you&apos;re here. Take a look around projects, skills, and how
            to reach me are just ahead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10 flex flex-col items-center gap-5"
          >
            <motion.button
              type="button"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 28px rgba(100, 255, 218, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              className="cursor-default rounded-md border border-AAsecondary/40 bg-primary-light px-8 py-3 text-sm font-medium tracking-wide text-AAsecondary backdrop-blur-sm md:px-10 md:text-base"
            >
              Enter experience
            </motion.button>

            <p className="font-mono text-[10px] text-text-dim/80 md:text-[11px]">
              Joy Chanda - lighting follows you
            </p>
          </motion.div>
        </motion.div>

        {/* Progress strip — visual rhythm until handoff to logo */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-text-dim/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-AAsecondary/70"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>
      </div>
    </div>
  );
}
