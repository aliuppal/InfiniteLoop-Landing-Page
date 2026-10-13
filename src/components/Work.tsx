import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tag, type Tone } from "@/components/Tag";

type Work = {
  name: string;
  tag: string;
  tone: Tone;
  blurb: string;
  url: string;
  image: string;
};

// Shipped products, live today. Screenshots live in /public/work (1200×632).
const WORK: Work[] = [
  {
    name: "TeckAuto",
    tag: "E-commerce",
    tone: "neon",
    blurb: "Spare-parts store that matches every part to your exact vehicle (year, make, model, engine) and hides what won't fit.",
    url: "https://www.teckauto.site/",
    image: "/work/teckauto.webp",
  },
  {
    name: "Invoq",
    tag: "Finance ops",
    tone: "cyan",
    blurb: "Scans invoices and purchase orders with AI OCR, then syncs vendors, line items and tax straight into SAP.",
    url: "https://www.invoq.space/dashboard",
    image: "/work/invoq.webp",
  },
  {
    name: "FrontDesk AI",
    tag: "AI receptionist",
    tone: "purple",
    blurb: "Answers your business phone 24/7, talks to callers like your best receptionist and books jobs into Google Calendar.",
    url: "https://frontdesk-ai-theta-liard.vercel.app/",
    image: "/work/frontdesk.webp",
  },
  {
    name: "CryptoQuant Pro",
    tag: "AI trading",
    tone: "cyan",
    blurb: "AI trading bot that scans the market around the clock, explains every call, and paper-trades crypto on autopilot.",
    url: "https://trading-bot-beige-two.vercel.app/",
    image: "/work/tradingbot.webp",
  },
  {
    name: "TradeLog",
    tag: "Trading journal",
    tone: "purple",
    blurb: "Trading journal with a P&L calendar, TP/SL/BE outcomes and the statistics that show which setups actually pay.",
    url: "https://tradelog-plum-five.vercel.app/",
    image: "/work/tradelog.webp",
  },
  {
    name: "Gymlo",
    tag: "Fitness",
    tone: "neon",
    blurb: "Gym tracker for streaks, weekly goals and a calendar of every day you showed up, synced across devices.",
    url: "https://gymlo-theta.vercel.app/",
    image: "/work/gymlo.webp",
  },
];

const hoverBorder: Record<Tone, string> = {
  neon: "hover:border-neon",
  cyan: "hover:border-cyan",
  purple: "hover:border-purple",
  muted: "hover:border-paper",
};

function WorkCard({ work, index }: { work: Work; index: number }) {
  const host = new URL(work.url).hostname.replace(/^www\./, "");
  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex h-full flex-col border border-line bg-surface transition-colors duration-200 ${hoverBorder[work.tone]}`}
      >
        {/* Browser-frame screenshot; only transform animates on hover. */}
        <div className="border-b border-line">
          <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 bg-line" />
              <span className="h-2 w-2 bg-line" />
              <span className="h-2 w-2 bg-line" />
            </span>
            <span className="truncate font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">
              {host}
            </span>
          </div>
          <div className="relative aspect-[1200/632] overflow-hidden bg-night">
            <Image
              src={work.image}
              alt={`${work.name} screenshot`}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <Tag tone={work.tone}>{work.tag}</Tag>
            <span className="flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              Live
            </span>
          </div>
          <h3 className="mt-6 font-heading text-3xl font-bold tracking-tighter text-paper">{work.name}</h3>
          <p className="mt-3 leading-relaxed text-muted">{work.blurb}</p>
          <span className="mt-auto flex items-center gap-2 pt-6 font-heading text-sm font-bold text-paper">
            Visit live site
            <ArrowUpRight
              size={18}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-10">
      <div className="flex flex-col gap-6 border-t-2 border-line pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Tag>Our work</Tag>
          <h2 className="mt-6 max-w-2xl font-heading text-4xl font-bold tracking-tighter text-paper md:text-6xl">
            Six loops. All shipped.
          </h2>
        </div>
        <p className="max-w-sm text-muted">
          Real products, live right now. Click any of them and use it. That&apos;s the only demo that counts.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {WORK.map((w, i) => (
          <WorkCard key={w.name} work={w} index={i} />
        ))}
      </div>
    </section>
  );
}
