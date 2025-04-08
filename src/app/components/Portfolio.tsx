"use client";

import { projectData } from "@/app/data/projectData";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<null | number>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveProject(index);
    setCurrentSlide(0);
  };

  const closeModal = () => setActiveProject(null);

  return (
    <section
      id="portfolio"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] px-6 py-16 text-white"
    >
      <motion.div
        className="w-full max-w-6xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h2 className="mb-6 text-4xl font-bold text-cyan-400">Our Portfolio</h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg text-white/80">
          <ChevronRight className="inline h-5 w-5 text-green-400" /> Exceptional
          Websites, Unmatched Designs &ndash; explore some of our past work that
          showcases our capabilities in creativity, performance, and innovation.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md"
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              transition={{ duration: 0.2 }}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="h-48 w-full rounded-xl object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-cyan-400">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-h-[95vh] w-[90vw] max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg backdrop-blur-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-1 right-2 mt-1 cursor-pointer p-2 text-white transition hover:text-red-500"
              >
                <X size={20} />
              </button>

              <div className="relative mt-5 mb-6 flex items-center justify-center">
                <img
                  src={projectData[activeProject].images[currentSlide]}
                  className="h-64 w-full rounded-xl object-cover"
                />
                {projectData[activeProject].images.length > 1 && (
                  <>
                    <button
                      className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 p-2 hover:bg-white/20"
                      onClick={() =>
                        setCurrentSlide((prev) =>
                          prev === 0
                            ? projectData[activeProject].images.length - 1
                            : prev - 1,
                        )
                      }
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 p-2 hover:bg-white/20"
                      onClick={() =>
                        setCurrentSlide((prev) =>
                          prev === projectData[activeProject].images.length - 1
                            ? 0
                            : prev + 1,
                        )
                      }
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>

              <h3 className="mb-2 text-2xl font-bold text-cyan-400">
                {projectData[activeProject].title}
              </h3>
              <div className="mb-4 flex flex-wrap gap-2 text-sm text-white/70">
                {projectData[activeProject].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-cyan-600 px-2 py-1 text-xs font-semibold text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white/90">
                {projectData[activeProject].description}
              </p>
              {projectData[activeProject].link && (
                <a
                  href={projectData[activeProject].link}
                  target="_blank"
                  className="mt-4 inline-block cursor-pointer font-medium text-cyan-300 underline hover:text-cyan-500"
                >
                  View Project
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
