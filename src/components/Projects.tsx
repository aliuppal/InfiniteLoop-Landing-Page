"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tag, type Tone } from "@/components/Tag";

type Project = {
  name: string;
  tag: string;
  tone: Tone;
  blurb: string;
  url: string;
  image: string;
  span: "wide" | "narrow";
};

// Live products. Screenshots live in /public/work (1200×632); TradeLog's is a designed cover
// because its live site opens on sign-in.
const PROJECTS: Project[] = [
  {
    name: "Invoq",
    tag: "Finance ops",
    tone: "cyan",
    blurb: "Scans invoices and purchase orders with AI OCR, then syncs vendors, line items and tax straight into SAP.",
    url: "https://www.invoq.space/dashboard",
    image: "/work/invoq.webp",
    span: "wide",
  },
  {
    name: "FrontDesk AI",
    tag: "AI receptionist",
    tone: "purple",
    blurb: "Answers your business phone 24/7, talks to callers like your best receptionist and books jobs into Google Calendar.",
    url: "https://frontdesk-ai-theta-liard.vercel.app/",
    image: "/work/frontdesk.webp",
    span: "narrow",
  },
  {
    name: "CryptoQuant Pro",
    tag: "AI trading",
    tone: "cyan",
    blurb: "AI trading bot that scans the market around the clock, explains every call, and paper-trades crypto on autopilot.",
    url: "https://trading-bot-beige-two.vercel.app/",
    image: "/work/tradingbot.webp",
    span: "narrow",
  },
  {
    name: "TeckAuto",
    tag: "E-commerce",
    tone: "neon",
    blurb: "Spare-parts store that matches every part to your exact vehicle (year, make, model, engine) and hides what won't fit.",
    url: "https://www.teckauto.site/",
    image: "/work/teckauto.webp",
    span: "wide",
  },
  {
    name: "TradeLog",
    tag: "Trading journal",
    tone: "purple",
    blurb: "Trading journal with a P&L calendar, TP/SL/BE outcomes and the statistics that show which setups actually pay.",
    url: "https://tradelog-plum-five.vercel.app/",
    image: "/work/tradelog.webp",
    span: "narrow",
  },
  {
    name: "Gymlo",
    tag: "Fitness",
    tone: "neon",
    blurb: "Gym tracker for streaks, weekly goals and a calendar of every day you showed up, synced across devices.",
    url: "https://gymlo-theta.vercel.app/",
    image: "/work/gymlo.webp",
    span: "narrow",
  },
  {
    name: "Auto Ninja",
    tag: "Car care",
    tone: "cyan",
    blurb: "Fuel logbook for your car: log every fill-up, track km/L and cost per km, and see your fuel card balance before it runs dry.",
    url: "https://fuel-logbook.vercel.app/",
    image: "/work/autoninja.webp",
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

// Browser-frame screenshot (no address shown). Only transform animates on hover, so it stays on the compositor.
function Screenshot({ project }: { project: Project }) {
  const wide = project.span === "wide";
  return (
    <div className="mt-auto border border-line bg-night">
      <div className="flex gap-1.5 border-b border-line px-3 py-2.5" aria-hidden="true">
        <span className="h-2 w-2 bg-line" />
        <span className="h-2 w-2 bg-line" />
        <span className="h-2 w-2 bg-line" />
      </div>
      <div className="relative aspect-[1200/632] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes={wide ? "(min-width: 768px) 800px, 100vw" : "(min-width: 768px) 400px, 100vw"}
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const wide = project.span === "wide";
  return (
    <Reveal delay={(index % 3) * 0.06} className={wide ? "md:col-span-2" : "md:col-span-1"}>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
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
        <p className="mb-8 mt-3 max-w-md leading-relaxed text-muted">{project.blurb}</p>

        {/* Pinned to the card bottom so screenshots line up across a row. */}
        <Screenshot project={project} />

        <span className="flex items-center gap-2 pt-6 font-heading text-sm font-bold text-paper">
          View product
          <motion.span variants={{ hover: { x: 3, y: -3 } }} transition={{ duration: 0.2 }}>
            <ArrowUpRight size={18} />
          </motion.span>
          <span className="sr-only">(opens in a new tab)</span>
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
            Seven live products. One in the lab.
          </h2>
        </div>
        <p className="max-w-sm text-muted">
          Every product here started as a two-week prototype. All seven are live: click one and use it.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}

        {/* The next loop: an open slot that doubles as a pitch CTA. */}
        <Reveal delay={0.12} className="md:col-span-3">
          <a
            href="#contact"
            className="group flex h-full flex-col justify-between gap-10 border border-dashed border-line p-6 transition-colors duration-200 hover:border-neon md:flex-row md:items-end md:p-8"
          >
            <div>
              <Tag tone="muted">In the lab</Tag>
              <h3 className="mt-10 flex items-center gap-3 font-heading text-4xl font-bold tracking-tighter text-paper md:text-5xl">
                <Zap size={36} strokeWidth={1.75} className="shrink-0 text-neon" aria-hidden="true" />
                Super Fast Agents
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                AI agents that take a task and finish it in seconds, not hours. In prototype now. Got a
                workflow you&apos;d hand to an agent tomorrow? The best pitches become the next loop.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 self-start border border-paper md:self-auto px-5 py-3 font-heading text-sm font-bold text-paper transition-colors group-hover:border-neon group-hover:bg-neon group-hover:text-night">
              Pitch an idea <ArrowUpRight size={16} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
