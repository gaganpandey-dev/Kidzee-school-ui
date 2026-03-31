"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Smile, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="/images/gallery4.png"
            alt="About Preschool"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            About Kidzee Virgonagar
          </h2>

          <p className="text-gray-600">
            Kidzee Virgonagar is a trusted preschool and day care center in Bengaluru,
            offering a safe, nurturing and stimulating environment for early childhood learning.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4">

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-500" />
              <span>Safe Environment</span>
            </div>

            <div className="flex items-center gap-3">
              <Smile className="text-yellow-500" />
              <span>Creative Learning</span>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="text-green-500" />
              <span>Activity-Based</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-pink-500" />
              <span>Experienced Teachers</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}