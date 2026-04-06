"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-indigo-200 via-pink-100 to-yellow-100 text-white font-[var(--font-quicksand)]">

      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          {/* 🔥 HEADING → Fredoka */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-[var(--font-fredoka)]">
            Where Little Minds <br />
            <span className="text-yellow-200">
              Grow Into Bright Futures 🌟
            </span>
          </h1>

          {/* 🔥 BODY → Quicksand */}
          <p className="text-lg md:text-xl text-white/90">
            A joyful, safe and inspiring preschool where learning feels like play.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* 🔥 BUTTON → Fredoka */}
            <a
              href="#contact"
              className="bg-white text-indigo-300 px-6 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105 font-[var(--font-fredoka)]"
            >
              Enrol Now 🚀
            </a>

            {/* 🔥 BUTTON → Fredoka */}
            <a
              href="https://wa.me/918088042991"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-6 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105 font-[var(--font-fredoka)]"
            >
              Chat on WhatsApp 💬
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/images/kids.png"
            alt="Kids Learning"
            width={500}
            height={400}
            priority
            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}