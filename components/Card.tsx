"use client";

import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  icon?: any;
  gradient?: string;
};

export default function Card({
  title,
  description,
  icon: Icon,
  gradient,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.07, rotate: 1 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-3xl shadow-xl relative overflow-hidden ${
        gradient
          ? `bg-gradient-to-br ${gradient} text-white`
          : "bg-white text-gray-800"
      }`}
    >

      {/* Decorative Circle */}
      {gradient && (
        <div className="absolute -top-5 -right-5 w-24 h-24 bg-white/20 rounded-full"></div>
      )}

      {/* ICON */}
      {Icon && <Icon size={36} className="mb-4" />}

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      {/* DESCRIPTION */}
      <p className="text-sm opacity-90">{description}</p>
    </motion.div>
  );
}