"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/resume";
import { buildMailto } from "@/lib/mailto";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";

const emptyForm = { name: "", email: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const infoCardClass =
  "flex items-center gap-3 rounded-xl border border-border bg-background p-4 card-hover";
const iconBoxClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent";
const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted/60 focus:border-accent/60 transition-colors";
const labelClass = "mb-1.5 block text-xs font-medium text-muted";

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof emptyForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [field]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(false);

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    window.location.href = buildMailto(
      profile.email,
      `Portfolio Inquiry from ${name}`,
      `${message}\n\n${name}\n${email}`
    );
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-surface/40">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="06 · Contact" title="Let's build something together" />

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m open to Full-Stack, Frontend, and AI automation / agent engineering roles,
              as well as freelance SaaS and automation work. Reach out and I&apos;ll get back to
              you as soon as I can.
            </p>

            <a href={buildMailto(profile.email, "Portfolio Inquiry")} className={infoCardClass}>
              <span className={iconBoxClass}>
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className="text-sm break-all">{profile.email}</span>
            </a>

            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className={infoCardClass}>
              <span className={iconBoxClass}>
                <Phone size={18} aria-hidden="true" />
              </span>
              <span className="text-sm">{profile.phone}</span>
            </a>

            <div className={infoCardClass}>
              <span className={iconBoxClass}>
                <MapPin size={18} aria-hidden="true" />
              </span>
              <span className="text-sm">{profile.location}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={infoCardClass}
              >
                <span className={iconBoxClass}>
                  <GithubIcon size={18} />
                </span>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={infoCardClass}
              >
                <span className={iconBoxClass}>
                  <LinkedinIcon size={18} />
                </span>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or role..."
                rows={5}
                required
                value={form.message}
                onChange={update("message")}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div aria-live="polite" className="min-h-5">
              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}
              {sent && !error && (
                <p role="status" className="text-sm text-accent-2">
                  Your email app should open with the message ready to send.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              Send message
              <Send size={16} aria-hidden="true" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
