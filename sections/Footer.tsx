"use client";

import Button from "@/components/Buttom";
import { Phone, Globe, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 text-white pt-12 pb-6 font-[var(--font-quicksand)]">

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-10">

        {/* LEFT - BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-[var(--font-fredoka)]">
            Kidzee Virgonagar
          </h2>

          <p className="text-white/90 text-sm leading-relaxed">
            Where little minds learn, play and grow into bright futures in a safe and joyful environment.
          </p>

          <p className="text-sm text-white/80">
            📍 Virgonagar, Aavalahalli, Bengaluru
          </p>

          <div className="mt-3 rounded-xl overflow-hidden shadow-lg border border-white/20">
            <iframe
              src="https://maps.google.com/maps?q=Cheemasandra%20Virgonagar%20Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-40 border-0"
              loading="lazy"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/NoLk1uoME95T4aHu6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold shadow hover:scale-105 transition font-[var(--font-fredoka)]"
          >
            📍 Open in Google Maps
          </a>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-[var(--font-fredoka)]">
            Explore
          </h3>

          <ul className="space-y-2 text-white/90">
            <li><a href="#about" className="hover:text-yellow-200 transition">About Us</a></li>
            <li><a href="#programs" className="hover:text-yellow-200 transition">Our Programs</a></li>
            <li><a href="#gallery" className="hover:text-yellow-200 transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-200 transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-[var(--font-fredoka)]">
            Connect With Us
          </h3>

          <div className="space-y-3 text-white/90 text-sm">

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:8088042991" className="hover:text-yellow-200 transition">
                8088042991
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook size={18} />
              <a
                href="https://www.facebook.com/KidzeeIndia"
                target="_blank"
                className="hover:text-yellow-200 transition"
              >
                KidzeeIndia
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram size={18} />
              <a
                href="https://www.instagram.com/kidzeeindia"
                target="_blank"
                className="hover:text-yellow-200 transition"
              >
                kidzeeindia
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={18} />
              <a
                href="https://www.kidzee.com"
                target="_blank"
                className="hover:text-yellow-200 transition"
              >
                kidzee.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>
                Cheemasandra, Virgonagar, Bengaluru - 560049
              </span>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-[var(--font-fredoka)]">
            Admissions Open 2026 🎓
          </h3>

          <p className="text-white/90 text-sm">
            Limited seats available. Connect with us today.
          </p>

          <div className="flex flex-col gap-3 font-[var(--font-fredoka)]">
            <Button
              text="Enroll Now 🚀"
              href="#contact"
              variant="secondary"
            />

            <Button
              text="Chat on WhatsApp 💬"
              href="https://wa.me/918088042991"
              variant="whatsapp"
            />
          </div>
        </div>

      </div> 

      {/* BOTTOM */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm text-white/80">
        © 2026 Kidzee Virgonagar • All Rights Reserved
      </div>

    </footer>
  );
}