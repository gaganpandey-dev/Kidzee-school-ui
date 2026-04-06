"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About 🧸", href: "#about" },
    { name: "Programs 🎨", href: "#programs" },
    { name: "Gallery 📸", href: "#gallery" },
    { name: "Contact 📞", href: "#contact" },
  ];

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full h-[64px] z-50 bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20 font-[Quicksand]">
      <div className="max-w-7xl mx-auto px-5 py-1 flex justify-between items-center h-full">

        {/* 🔥 LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex items-center"
        >
          <div className="flex flex-col items-center px-1 py-0">

            <svg width="160" height="65" viewBox="0 0 220 100">
              <path
                id="curve"
                d="M20,70 Q110,25 200,70"
                fill="transparent"
              />

              <text
                fill="#6B21A8"
                fontSize="32"
                fontWeight="900"
                letterSpacing="2"
                style={{
                  fontFamily: "Fredoka",
                  filter: "drop-shadow(2px 2px 0px #FACC15)"
                }}
              >
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  KIDZEE
                </textPath>
              </text>
            </svg>

            <p className="text-[10px] text-purple-800 font-semibold text-center -mt-3">
              Virgonagar, Cheemasandra ✨
            </p>

          </div>

          <motion.div
            animate={{ y: [0, -5, 0], opacity: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute right-0 top-1 w-2 h-2 bg-yellow-300 rounded-full"
          />
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.href)}
              className="relative group transition hover:text-indigo-600 text-sm font-[Fredoka]"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all group-hover:w-full"></span>
            </button>
          ))}

          <motion.button
            onClick={() => handleScroll("#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-1.5 rounded-full bg-yellow-400 text-black text-sm font-semibold shadow-md font-[Fredoka]"
          >
            🎓 Admissions 2026-27
          </motion.button>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-1"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-black block"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-black block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-black block"
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="md:hidden bg-white shadow-lg px-5 py-5 space-y-4 font-[Comic_Neue]"
          >
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleScroll(link.href)}
                className="block text-gray-700 text-base"
              >
                {link.name}
              </button>
            ))}

            <motion.button
              onClick={() => handleScroll("#contact")}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-400 py-2.5 rounded-full font-semibold text-sm"
            >
              🎓 Start Admission 🚀
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}