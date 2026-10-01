"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tag, type Tone } from "@/components/Tag";

type Project = {
  name: string;
  tag: string;
  tone: Tone;
  blurb: string;
  span: "wide" | "narrow";
};

const PROJECTS: Project[] = [
  {
    name: "TaskFlow",
    tag: "Project management",
    tone: "neon",
    blurb:
      "Project management for dev teams. Sprints, issues and releases on one board that reads like your git log.",
    span: "wide",
  },
  {
    name: "InvoiceAI",
    tag: "Billing",
    tone: "cyan",
    blurb:
      "Automated billing. Drafts invoices from tracked work, chases late payments, and reconciles when the money lands.",
    span: "narrow",
  },
  {
    name: "DataSync",
    tag: "API integration",
    tone: "purple",
    blurb:
      "Connect any two APIs without glue code. Map fields once and DataSync keeps both sides in step.",
    span: "narrow",
  },
];

// Hover border colour per tone — literal class names so Tailwind can see them.
const hoverBorder: Record<Tone, string> = {
  neon: "hover:border-neon",
  cyan: "hover:border-cyan",
  purple: "hover:border-purple",
  muted: "hover:border-paper",
};

// A tiny, honest stand-in for the TaskFlow UI: three columns of task chips.
function MiniBoard() {
  const cols = [
    { label: "Backlog", chips: [70, 45, 60] },
    { label: "In progress", chips: [55, 80] },
    { label: "Shipped", chips: [65, 40, 75, 50] },
  ];
  return (
    <div className="mt-8 grid grid-cols-3 gap-3 border border-line bg-night p-3" aria-hidden="true">
      {cols.map((col) => (
        <div key={col.label} className="flex flex-col gap-2">
          <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted">
            {col.label}
          </span>
          {col.chips.map((w, i) => (
            <span
              key={i}
              className={`block h-6 border ${col.label === "Shipped" ? "border-neon/40 bg-neon/10" : "border-line bg-surface"}`}
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const wide = project.span === "wide";
  return (
    <Reveal delay={index * 0.06} className={wide ? "md:col-span-2" : "md:col-span-1"}>
      <motion.a
        href="#"
        whileHover="hover"
        className={`group flex h-full flex-col border border-line bg-surface p-6 transition-colors duration-200 md:p-8 ${hoverBorder[project.tone]}`}
      >
        <div className="flex items-start justify-between gap-4">
          <Tag tone={project.tone}>{project.tag}</Tag>
          <span className="flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
            Live
          </span>
        </div>

        <h3 className="mt-10 font-heading text-4xl font-bold tracking-tighter text-paper md:text-5xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted">{project.blurb}</p>

        {wide && <MiniBoard />}

        <span className="mt-auto flex items-center gap-2 pt-8 font-heading text-sm font-bold text-paper">
          View product
          <motion.span variants={{ hover: { x: 3, y: -3 } }} transition={{ duration: 0.2 }}>
            <ArrowUpRight size={18} />
          </motion.span>
        </span>
      </motion.a>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="products" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-10">
      <div className="flex flex-col gap-6 border-t-2 border-line pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Tag>Active projects</Tag>
          <h2 className="mt-6 max-w-2xl font-heading text-4xl font-bold tracking-tighter text-paper md:text-6xl">
            Three live products. One in the lab.
          </h2>
        </div>
        <p className="max-w-sm text-muted">
          Every product here started as a two-week prototype. The ones people kept using got a team.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}

        {/* The next loop: an open slot that doubles as a pitch CTA. */}
        <Reveal delay={0.18} className="md:col-span-2">
          <a
            href="#contact"
            className="group flex h-full flex-col justify-between gap-10 border border-dashed border-line p-6 transition-colors duration-200 hover:border-neon md:flex-row md:items-end md:p-8"
          >
            <div>
              <Tag tone="muted">In the lab</Tag>
              <h3 className="mt-10 flex items-center gap-3 font-heading text-4xl font-bold tracking-tighter text-paper md:text-5xl">
                <FlaskConical size={36} strokeWidth={1.75} className="text-neon" aria-hidden="true" />
                Loop #4
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Our next product is in prototype. Got a workflow you&apos;d pay never to do again?
                The best pitches become the next loop.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 border border-paper px-5 py-3 font-heading text-sm font-bold text-paper transition-colors group-hover:border-neon group-hover:bg-neon group-hover:text-night">
              Pitch an idea <ArrowUpRight size={16} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
