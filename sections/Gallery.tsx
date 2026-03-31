"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/kidzee-gallery-a.png",
  "/images/kidzee-gallery-b.png",
  "/images/kidzee-gallery-c.png",
  "/images/kidzee-gallery-d.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 text-center">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Gallery
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative w-full h-48 md:h-60 rounded-2xl overflow-hidden shadow-md bg-gray-100"
            >

              <Image
                src={src}
                alt={`gallery-${index}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                unoptimized   // ✅ ensures no rendering issue
              />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}