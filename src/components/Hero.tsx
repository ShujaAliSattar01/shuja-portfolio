"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/resume";
import { buildMailto } from "@/lib/mailto";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent-2/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-px mx-auto max-w-6xl w-full grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-accent text-sm font-mono mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-accent-2 animate-pulse" />
            Available for new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}{" "}
            <span className="block gradient-text">{profile.role}</span>
            <span className="block text-[0.6em] font-semibold text-foreground/90 mt-2">
              <span className="text-muted mr-3" aria-hidden="true">
                |
              </span>
              AI Automation &amp; AI Agents
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
            >
              Contact Me
            </a>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" aria-hidden="true" />
              {profile.location}
            </span>
            <a
              href={buildMailto(profile.email, "Portfolio Inquiry")}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail size={16} className="text-accent" aria-hidden="true" />
              {profile.email}
            </a>
            <span className="flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-accent transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto hidden aspect-[3/4] w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-accent/25 via-accent-2/10 to-transparent blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border/60">
            <Image
              src="/mypic.png"
              alt={profile.name}
              fill
              preload
              sizes="(min-width: 1024px) 380px, 0px"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </a>
    </section>
  );
}
