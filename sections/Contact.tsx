"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/Buttom";

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;

    const parentName = form.parentName.value;
    const childName = form.childName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const text = `Hello, I want to enquire about admission.

👨‍👩‍👧 Parent Name: ${parentName}
👶 Child Name: ${childName}
📞 Phone: ${phone}
📧 Email: ${email}
📝 Message: ${message}`;

    const url = `https://wa.me/918088042991?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-indigo-500 via-pink-400 to-yellow-300 font-[var(--font-quicksand)]"
    >
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-white"
        >
          <h2 className="text-4xl font-extrabold font-[var(--font-fredoka)]">
            Book Your Child’s Bright Future 🌟
          </h2>

          <p className="text-white/90 text-lg">
            Admissions for 2026 are now open. Limited seats available.
          </p>

          <div className="font-[var(--font-fredoka)]">
            <Button
              text="Chat on WhatsApp 💬"
              href="https://wa.me/918088042991"
              variant="whatsapp"
            />
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/20 backdrop-blur-lg p-6 rounded-3xl shadow-xl space-y-4 border border-white/30 font-[var(--font-quicksand)]"
        >

          {!submitted ? (
            <>
              <input
                name="parentName"
                type="text"
                placeholder="Parent Name"
                className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />

              <input
                name="childName"
                type="text"
                placeholder="Child Name"
                className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300"
              />

              <button
                type="submit"
                className="w-full bg-yellow-300 hover:bg-yellow-400 py-3 rounded-full font-semibold shadow-md transition font-[var(--font-fredoka)]"
              >
                Submit Enquiry 🚀
              </button>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center text-white py-10"
            >
              <h3 className="text-3xl font-bold mb-3 font-[var(--font-fredoka)]">
                🎉 Thank You!
              </h3>
              <p className="text-lg">
                Your enquiry has been submitted successfully.
              </p>
              <p className="text-sm mt-2">
                We will contact you soon 😊
              </p>
            </motion.div>
          )}

        </motion.form>
      </div>
    </section>
  );
}