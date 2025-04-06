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
  "pricing",
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
        className="absolute right-0 mx-0 flex w-[80vw] max-w-7xl items-center justify-between gap-2 rounded-l-full bg-teal-500/80 px-4 py-4 max-md:w-auto"
      >
        {/* Desktop Nav */}
        <div className="hidden gap-4 font-medium text-white md:flex">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`rounded-4xl px-4 py-2 transition ${
                activeSection === sec ? "bg-teal-800" : "hover:bg-teal-700"
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
        className={`fixed top-0 right-0 z-40 h-full w-64 transform bg-teal-500/80 px-6 py-8 text-white transition-transform duration-300 ease-in-out md:hidden ${
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
                activeSection === sec ? "bg-teal-800" : "hover:bg-teal-700"
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
