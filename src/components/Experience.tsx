"use client";

import { motion } from "framer-motion";
import { experience, additionalExposure } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="03 · Experience" title="Where I've worked" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8 card-hover before:absolute before:left-0 before:top-8 before:bottom-8 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-accent before:to-accent-2"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-xl font-semibold">
                  {job.role} <span className="text-accent">· {job.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted">{job.period}</span>
              </div>
              <p className="text-sm text-muted mb-5">{job.location}</p>

              <ul className="space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-foreground/80 border-t border-border pt-4">
                {job.exposure}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {additionalExposure.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-5 card-hover"
            >
              <h4 className="font-semibold mb-2 text-sm text-accent">{item.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
