"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

const HomePage = () => {
  const myRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

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
          color: 0xff3f81,
          backgroundColor: 0x23153c,
        }),
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={myRef}
      id="home"
      className="flex min-h-screen items-center justify-center bg-teal-700 px-6 text-white"
    >
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="text-left">
          <h1 className="mb-4 text-center text-4xl font-bold sm:text-6xl">
            TECHYUG &ndash; AN ERA OF TECH
          </h1>
          <p className="max-w-xl text-justify text-lg text-white/90 sm:text-xl">
            Welcome to TECHYUG &ndash; a modern hub for innovation, creativity,
            and all things technology. We&apos;re here to empower individuals
            and businesses with cutting-edge services and solutions that shape
            the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
