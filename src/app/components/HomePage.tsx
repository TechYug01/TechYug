"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import type { VantaEffect } from "vanta/dist/vanta.globe.min";
import GLOBE from "vanta/dist/vanta.globe.min";

const HomePage = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x22d3ee,
          backgroundColor: 0x0f0c29,
        }),
      );
    }

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <section
      ref={myRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 text-white"
    >
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="px-4 text-center">
          <motion.h1
            initial={{ x: "-100vw", rotateZ: -180, opacity: 0 }}
            animate={{ x: 0, rotateZ: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-4 text-4xl font-bold text-cyan-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.7)] sm:text-5xl"
          >
            TECHYUG &#45; AN ERA OF TECH
          </motion.h1>

          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="mx-auto max-w-3xl text-base text-[#e0f7fa] drop-shadow-[0_1px_6px_rgba(0,255,255,0.4)] sm:text-lg"
          >
            Welcome to{" "}
            <strong className="font-semibold text-cyan-300">TECHYUG</strong>{" "}
            &ndash; a modern hub for innovation, creativity, and all things
            technology. We&apos;re here to empower individuals and businesses
            with cutting-edge services and solutions that shape the future.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
