"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="font-mono text-sm text-accent mb-2">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      <span
        aria-hidden="true"
        className={`mt-4 block h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-2 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
