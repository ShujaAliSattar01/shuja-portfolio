"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Radio, Bot } from "lucide-react";
import { profile } from "@/data/resume";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Layers,
    title: "Full-Stack SaaS & CRM",
    detail: "Dashboards, forms, calendars, Kanban views, and multi-step business workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Permissions",
    detail: "Multi-tenancy, RBAC, and permission-aware workflows across product portals.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    detail: "LLM-driven agents, voice/speech-to-text, browser & desktop automation, and scraping in Python.",
  },
  {
    icon: Radio,
    title: "Real-Time & Debugging",
    detail: "WebRTC & Socket.IO features, plus tracing production issues across UI, API, and data layers.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 · About" title="A bit about me" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-4 text-muted leading-relaxed"
          >
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-5 card-hover"
              >
                <item.icon className="text-accent mb-3" size={22} aria-hidden="true" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
