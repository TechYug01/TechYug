"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "services",
  "portfolio",
  "technologies",
  "pricing",
  "feedback",
  "contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-5 z-50 w-full">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-10 mt-5 text-2xl font-bold tracking-wider text-white"
      >
        <Link href={"/"}>TECHYUG</Link>
      </motion.div>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute right-0 mx-0 flex w-[80vw] max-w-7xl items-center justify-between gap-2 rounded-l-full border border-white/20 bg-white/10 px-4 py-4 shadow-md backdrop-blur-lg max-md:w-auto"
      >
        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 font-medium text-white md:flex md:text-[12px] lg:gap-2 lg:text-[14px] xl:gap-4 xl:text-[16px]">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`cursor-pointer rounded-4xl px-2 py-1 transition md:px-3 md:py-2 lg:px-4 lg:py-2 ${
                activeSection === sec ? "bg-cyan-600" : "hover:bg-cyan-500"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <X size={28} className="text-transparent" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </motion.div>

      {/* Mobile Menu Slide */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-64 transform border-l border-white/20 bg-white/10 px-6 py-8 text-white shadow-lg backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute right-4 mt-1 mb-8 flex items-center justify-between">
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <div className="mt-15 flex flex-col space-y-4">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`rounded-lg px-3 py-2 text-left font-medium transition ${
                activeSection === sec ? "bg-cyan-600" : "hover:bg-cyan-500"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
