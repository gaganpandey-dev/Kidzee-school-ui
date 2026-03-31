"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // ✅ IMPORTANT

export default function PosterShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-pink-50 overflow-x-hidden">

      <div className="max-w-6xl mx-auto px-5 text-center space-y-12">

        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-gray-800">
          A Joyful Learning Journey Begins Here 🎨
        </h2>

        {/* POSTER CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }} // ✅ lighter (iOS safe)
          transition={{ duration: 0.5 }}
          className="relative group"
        >

          {/* 🌈 Glow Background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

          {/* 🖼️ Poster */}
          <div className="relative bg-white/20 backdrop-blur-md p-2 rounded-3xl shadow-2xl overflow-hidden">

            {/* ✅ FIXED IMAGE */}
            <Image
              src="/images/gallery5.png"   // ⚠️ MUST EXIST
              alt="Kidzee Poster"
              width={800}
              height={600}
              priority   // ✅ important (hero-like section)
              className="rounded-2xl w-full h-auto object-cover"
            />

            {/* ✨ Shine Wave Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
            </div>

          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-indigo-600">Kidzee Virgonagar</span>, we focus on building strong foundations through 
          <span className="font-medium text-pink-500"> early-age skill development</span>. 
          With our thoughtfully designed programs like Playgroup, Nursery, Kindergarten and Day Care, 
          we ensure every child experiences a perfect balance of 
          <span className="font-medium text-green-600"> learning, creativity and joyful growth</span>.
        </p>

      </div>
    </section>
  );
}