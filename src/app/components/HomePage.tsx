"use client";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  return (
    <section
      ref={myRef}
      id="home"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-teal-900 via-teal-700 to-teal-500 px-6 text-center text-white"
    >
      <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
        TECHYUG - AN ERA OF TECH
      </h1>
      <p className="max-w-2xl text-lg text-white/90 sm:text-xl">
        Welcome to TECHYUG – a modern hub for innovation, creativity, and all
        things technology. We’re here to empower individuals and businesses with
        cutting-edge services and solutions that shape the future.
      </p>
    </section>
  );
};

export default HomePage;
