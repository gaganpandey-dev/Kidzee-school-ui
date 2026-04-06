"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Smile,
  BookOpen,
  Users,
  MapPin,
  Clock,
} from "lucide-react";

export default function About() {

  const images = [
    "/images/gallery4.png",
    "/images/kids.png",
    "/images/kidzee-gallery-a.png",
    "/images/kidzee-gallery-schl.png",
    "/images/kidzee-gallery-schl1.png"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#fdfbff] via-[#f5f3ff] to-[#eef2ff] font-[var(--font-quicksand)]"
    >
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-lg mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[340px]">

            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Kidzee learning environment"
                className="absolute w-full h-full object-cover rounded-3xl"
                animate={{
                  opacity: i === index ? 1 : 0,
                  scale: i === index ? 1 : 1.05,
                }}
                transition={{ duration: 0.8 }}
              />
            ))}

          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >

          {/* HEADING */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 font-[var(--font-fredoka)]">
              A Joyful Place Where <br />
              <span className="text-purple-600">Young Minds Grow & Thrive 🌈</span>
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              At <span className="font-semibold text-purple-600">Kidzee Virgonagar</span>, 
              we provide a thoughtfully designed environment that nurtures curiosity, confidence, and creativity in every child.
            </p>

            <p className="text-gray-600 mt-3 text-lg leading-relaxed">
              Our play-based learning approach encourages exploration, interaction, and holistic development — helping children build essential life skills while enjoying every step of their early learning journey.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-6">

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <ShieldCheck className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 font-[var(--font-fredoka)]">
                  Safe & Secure Campus
                </p>
                <p className="text-sm text-gray-600">
                  CCTV-monitored with a child-friendly infrastructure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Smile className="text-yellow-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 font-[var(--font-fredoka)]">
                  Joyful Learning Experience
                </p>
                <p className="text-sm text-gray-600">
                  Engaging, fun-based activities every day
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <BookOpen className="text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 font-[var(--font-fredoka)]">
                  Activity-Based Curriculum
                </p>
                <p className="text-sm text-gray-600">
                  Learning through play, art, and storytelling
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Users className="text-pink-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 font-[var(--font-fredoka)]">
                  Experienced Educators
                </p>
                <p className="text-sm text-gray-600">
                  Caring, trained, and dedicated teachers
                </p>
              </div>
            </div>

          </div>

          {/* EXTRA INFO */}
          <div className="grid md:grid-cols-2 gap-5">

            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl shadow-sm">
              <MapPin className="text-green-600" />
              <span className="text-sm text-gray-700">
                Virgonagar, Bengaluru
              </span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl shadow-sm">
              <Clock className="text-blue-600" />
              <span className="text-sm text-gray-700">
                Monday to Saturday • 9:00 AM – 12:00 PM
              </span>
            </div>

          </div>

          {/* CTA */}
          <div>
            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition font-[var(--font-fredoka)]"
            >
              🎓 Schedule a Visit
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}