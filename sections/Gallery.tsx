"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // ✅ IMPORTANT

const images = [
  "/images/gallery.png",
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Gallery
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }} // ✅ lighter for iOS
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={src}
                alt={`gallery-${index}`}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}