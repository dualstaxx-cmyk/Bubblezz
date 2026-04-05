"use client";

import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Award, FlaskConical, Heart, Leaf } from "lucide-react";

const VALUES = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "Cold-pressed botanical ingredients, no synthetic fillers.",
  },
  {
    icon: FlaskConical,
    title: "Science-Backed",
    desc: "Every formula is dermatologist-tested before it reaches you.",
  },
  {
    icon: Heart,
    title: "Crafted with Care",
    desc: "Small-batch production to ensure consistent quality.",
  },
  {
    icon: Award,
    title: "Ethically Made",
    desc: "Cruelty-free, paraben-free, and sulfate-free always.",
  },
];

export default function ValuesGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
    >
      {VALUES.map(({ icon: Icon, title, desc }) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="bg-white rounded-card p-6 border border-[#e8e0d5]"
        >
          <Icon size={24} className="text-gold mb-3" />
          <p className="font-body font-semibold text-brand-black text-sm">
            {title}
          </p>
          <p className="font-body text-gray-500 text-xs mt-1 leading-relaxed">
            {desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
