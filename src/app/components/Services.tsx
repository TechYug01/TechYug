"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Code,
  Globe,
  PenTool,
  PhoneCall,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Globe size={40} />,
    title: "Web Design",
    description:
      "We craft visually immersive and intuitive web designs that stand out, optimize engagement, and deliver seamless user experiences with bold aesthetics.",
  },
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description:
      "Using the latest tech stacks, we build fast, reliable, and scalable applications with powerful backend logic and a pixel-perfect frontend.",
  },
  {
    icon: <PhoneCall size={40} />,
    title: "24/7 Free Support",
    description:
      "Day or night, our support team is ready to solve your issues instantly—via call, chat, or email—ensuring 100% uptime and customer happiness.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "100% Responsive Websites",
    description:
      "We ensure your site is optimized for all screen sizes, offering fluid layouts and smooth transitions on mobile, tablet, and desktop.",
  },
  {
    icon: <PenTool size={40} />,
    title: "Content Writing",
    description:
      "Our expert writers create compelling SEO-optimized content that elevates your brand and connects deeply with your target audience.",
  },
  {
    icon: <Brush size={40} />,
    title: "Logo Design & Branding",
    description:
      "We design modern logos and brand systems that embody your vision, spark recognition, and drive loyalty in competitive markets.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="services min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-6 text-4xl font-bold text-cyan-400 drop-shadow"
        >
          What We Offer
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="mx-auto mb-12 max-w-3xl text-lg text-gray-300"
        >
          At <strong className="text-cyan-400">TECHYUG</strong>, we create
          futuristic digital solutions tailored to your unique needs. Whether
          you&apos;re a startup or enterprise, we deliver high&#45;performance
          products that scale and excite.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-64 cursor-pointer overflow-hidden rounded-xl bg-[#1a1a2e] shadow-xl transition"
              >
                <motion.div
                  animate={
                    hoveredIndex === index
                      ? { y: 250, opacity: 0 }
                      : { y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.4 }}
                  className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-cyan-300"
                >
                  {service.icon}
                  <h3 className="mt-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                </motion.div>

                <motion.p
                  animate={
                    hoveredIndex === index
                      ? { y: 0, opacity: 1 }
                      : { y: -250, opacity: 0 }
                  }
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-700 px-6 text-base leading-relaxed text-white"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center"
        >
          <Sparkles size={32} className="mb-2 animate-pulse text-cyan-400" />
          <p className="text-xl font-semibold text-cyan-400 drop-shadow">
            Let&apos;s build something exceptional together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
