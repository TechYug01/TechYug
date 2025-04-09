"use client";

import pricing from "@/../public/pricing.svg";
import { motion } from "framer-motion";
import { DollarSign, Lightbulb, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-10 flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] px-6 py-20 text-white"
    >
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <Image
            src={pricing}
            alt="Pricing Illustration"
            width={500}
            height={500}
            className="w-full max-w-md object-contain drop-shadow-xl"
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold text-cyan-400 drop-shadow"
          >
            <DollarSign className="mb-2 inline-block h-8 w-8 text-pink-500" />
            &nbsp;Plans & Pricing
          </motion.h2>

          <motion.p
            variants={fadeIn}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 text-lg text-white/90"
          >
            At <strong>TECHYUG</strong>, we understand that every project is
            unique. That&apos;s why we don&apos;t believe in
            one&#45;size&#45;fits&#45;all pricing. Instead, we craft custom
            plans based on your exact needs, goals, and budget.
          </motion.p>

          <motion.div
            variants={fadeIn}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md"
          >
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-blue-300">
              <MessageSquareQuote className="h-6 w-6 text-cyan-300" />
              How It Works?
            </h3>
            <ul className="list-inside list-decimal space-y-3 text-white/80">
              <li>
                Fill out the{" "}
                <Link href={"/#contact"} className="text-yellow-400">
                  contact form
                </Link>{" "}
                with your project requirements.
              </li>
              <li>Our team will reach out to schedule a Google Meet call.</li>
              <li>
                We&apos;ll discuss your vision, goals, and budget to craft the
                perfect plan for you.
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2 text-lg font-medium text-pink-400">
              <Lightbulb className="h-6 w-6 text-yellow-400" />
              Let&apos;s build something amazing &ndash; just the way you
              envision it!
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
