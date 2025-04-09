"use client";

import contact from "@/../public/contact.svg";
import { motion } from "framer-motion";
import { Headphones, Mail, MessageCircle, Phone, User } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8 },
  }),
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] px-6 py-20 text-white"
    >
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Image Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <Image
            src={contact}
            alt="Contact Illustration"
            width={500}
            height={500}
            priority
            className="w-full max-w-md object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Contact Form Section */}
        <div className="w-full max-w-xl text-center md:text-left">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold text-cyan-400 drop-shadow"
          >
            <Mail className="mb-2 inline-block h-8 w-8 text-pink-500" />
            &nbsp;Contact Us
          </motion.h2>

          <motion.p
            variants={fadeIn}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-center gap-2 text-lg text-white/90 md:justify-start"
          >
            Let&apos;s build something exceptional together! Whether you&apos;re
            ready to start or just have a question, we&apos;re here for you.
          </motion.p>

          {/* Form */}
          <motion.form
            variants={fadeIn}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-white/80"
              >
                <User className="mr-2 inline-block h-5 w-5 text-blue-400" />
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-white/80"
              >
                <Mail className="mr-2 inline-block h-5 w-5 text-blue-400" />
                Your Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="johndoe@example.com"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-white/80"
              >
                <Phone className="mr-2 inline-block h-5 w-5 text-blue-400" />
                Your Mobile Number
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="phone"
                placeholder="+91 9839001213"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-white/80"
              >
                <MessageCircle className="mr-2 inline-block h-5 w-5 text-blue-400" />
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            variants={fadeIn}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 flex items-center justify-center gap-2 text-base font-medium text-blue-300 md:justify-start"
          >
            <Headphones className="h-5 w-5 text-yellow-300" />
            24/7 Dedicated Support &ndash; Chat, Email & Phone Assistance
            Anytime
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
