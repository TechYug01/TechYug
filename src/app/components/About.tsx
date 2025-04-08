"use client";

import about from "@/../public/about.svg";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const reasons = [
  {
    title: "Expert-Led Digital Transformation",
    icon: <Users className="text-cyan-400" size={28} />,
    description:
      "Backed by a skilled team of developers, designers, and strategists bringing expertise to every project.",
  },
  {
    title: "Custom-Tailored Solutions",
    icon: <Settings className="text-cyan-400" size={28} />,
    description:
      "Scalable, high-performance websites and apps that adapt to your evolving business needs.",
  },
  {
    title: "Innovation-First Approach",
    icon: <Lightbulb className="text-cyan-400" size={28} />,
    description:
      "We embrace cutting-edge tools and frameworks to deliver seamless and innovative digital solutions.",
  },
  {
    title: "Client-Driven Success",
    icon: <TrendingUp className="text-cyan-400" size={28} />,
    description:
      "Your goals are at the heart of everything we build — we measure our success by yours.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1f1f1f] via-[#1a1a2e] to-[#0f0c29] px-6 py-20 text-white"
    >
      <div className="grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={about}
            alt="About TECHYUG"
            width={500}
            height={500}
            className="mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold text-cyan-400">
            Where Creativity Meets Technology
          </h2>
          <p className="mb-6 text-lg text-white/90">
            At <strong>TECHYUG</strong>, we are more than just developers — we
            are creators, problem-solvers, and digital architects building
            high-performing websites, dynamic apps, and intuitive experiences.
          </p>
          <p className="mb-6 text-lg text-white/80">
            From college projects to global enterprises, our solutions cater to
            a wide spectrum of industries with a deep focus on quality, UX, and
            future-ready design.
          </p>
          <p className="mb-10 text-lg text-white/80">
            We innovate, strategize, and engineer transformative experiences.
          </p>

          <h3 className="mb-4 text-2xl font-semibold text-cyan-300">
            Why Choose Us?
          </h3>

          <div className="space-y-4">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl border border-cyan-700 bg-[#121212] p-4 transition-shadow hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                  className="flex w-full cursor-pointer items-center justify-between"
                >
                  <div className="flex items-center gap-3 text-left">
                    {item.icon}
                    <span className="text-lg font-medium">{item.title}</span>
                  </div>
                  {activeIndex === index ? (
                    <ChevronUp className="text-cyan-400" />
                  ) : (
                    <ChevronDown className="text-cyan-400" />
                  )}
                </button>

                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-white/80"
                  >
                    {item.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
