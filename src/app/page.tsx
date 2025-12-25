"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import SocialBar from "@/components/SocialBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import ThisCantBeReached from "@/components/ThisCantBeReached";
import Startup from "@/components/Startup";
import { useApp } from "@/context/AppContext";

export default function Home() {
  const { finishedLoading, setFinishedLoading } = useApp();
  const [showThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [showStartup, setShowStartup] = useState(false);

  useEffect(() => {
    // Stage 1: Error Animation (0 - 10s)
    const errorTimer = setTimeout(() => {
      setShowThisCantBeReached(false);
      setShowStartup(true);
    }, 10000);

    // Stage 2: Startup Animation (10s - 15.9s)
    const startupTimer = setTimeout(() => {
      setShowStartup(false);
      setFinishedLoading(true);
    }, 15900);

    return () => {
      clearTimeout(errorTimer);
      clearTimeout(startupTimer);
    };
  }, [setFinishedLoading]);

  return (
    <main className="flex flex-col items-center">
      {!finishedLoading && showThisCantBeReached && <ThisCantBeReached />}
      {!finishedLoading && showStartup && <Startup />}
      
      {finishedLoading && (
        <>
          <Header />
          <SocialBar />
          <div className="w-full">
            <Hero />
            <About />
            <Projects />
            <Education />
            <Contact />
            <ScrollToTop />
          </div>
        </>
      )}
    </main>
  );
}
