"use client";

import Image from "next/image";

const images = [
  "/images/gallery5.png",
  "/images/kids.png",
  "/images/kidzee-gallery-a.png",
  "/images/kidzee-gallery-b.png",
  "/images/kidzee-gallery-c.png",
  "/images/kidzee-gallery-d.png",
  "/images/kidzee-gallery-e.png",
  "/images/kidzee-gallery-f.png",
  "/images/kidzee-gallery-g.png",
  "/images/kidzee-gallery-h.png",
  "/images/kidzee-gallery-i.png",
  "/images/kidzee-gallery-j.png",
  "/images/kidzee-gallery-k.png",
  "/images/kidzee-gallery-l.png"
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-5 text-center">

        {/* TITLE */}
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4 font-[var(--font-fredoka)]">
          Inside Our Preschool Experience 🏫
        </h2>

        <p className="text-gray-600 mb-12">
          Explore how children learn, play, and grow in a fun and nurturing environment
        </p>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-44 md:h-52 overflow-visible"
            >
              {/* 🔥 HOVER CARD */}
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">

                <Image
                  src={src}
                  alt={`gallery-${index}`}
                  fill
                  className="object-contain bg-white"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition"></div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}