"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";
import { education, languages } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="05 · Education" title="Academic background" />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-6 flex gap-4 card-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={20} aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    {edu.period && (
                      <span className="font-mono text-xs text-muted">{edu.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-accent mt-0.5">{edu.school}</p>
                  <p className="text-sm text-muted mt-0.5">{edu.location}</p>
                  {edu.detail && (
                    <p className="text-sm text-muted mt-2 leading-relaxed">{edu.detail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-surface p-6 h-fit card-hover"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-3">
              <Languages size={20} aria-hidden="true" />
            </span>
            <h3 className="font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
