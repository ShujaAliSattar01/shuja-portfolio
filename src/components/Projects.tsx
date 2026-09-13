"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./icons";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-medium text-background hover:opacity-90 transition-opacity"
        >
          Live Demo
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium hover:border-accent/50 hover:text-accent transition-colors"
        >
          <GithubIcon size={14} />
          Source
        </a>
      )}
    </div>
  );
}

function StackTags({ stack }: { stack: string[] }) {
  if (stack.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[11px] text-muted transition-colors group-hover:border-accent/30"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Thumbnail({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-surface">
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes={sizes}
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-surface/40">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="04 · Projects" title="Selected projects & engineering work" />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="group card-hover mb-6 grid overflow-hidden rounded-2xl border border-border bg-background lg:grid-cols-5"
        >
          <div className="lg:col-span-3 border-b border-border lg:border-b-0 lg:border-r">
            <Thumbnail project={featured} sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
          <div className="lg:col-span-2 flex flex-col p-6 sm:p-8">
            <span className="mb-3 inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
              Featured
            </span>
            <h3 className="text-2xl font-semibold tracking-tight">{featured.name}</h3>
            <p className="text-xs font-mono text-accent mb-4">{featured.subtitle}</p>
            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{featured.description}</p>
            <StackTags stack={featured.stack} />
            <ProjectLinks project={featured} />
          </div>
        </motion.article>

        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group card-hover flex flex-col overflow-hidden rounded-2xl border border-border bg-background hover:-translate-y-1"
            >
              <div className="border-b border-border">
                <Thumbnail project={project} sizes="(min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                <p className="text-xs font-mono text-accent mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{project.description}</p>
                <StackTags stack={project.stack} />
                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
