import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";

const AGENTS = ["Social Media Agent", "Voice Booking Agent", "Email Marketing Agent", "Website Chat-Edit Agent"];

// Landing-page pointer to the /services page.
export function ServicesTeaser() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
      <Reveal>
        <div className="flex flex-col gap-10 border-2 border-neon p-6 md:flex-row md:items-end md:justify-between md:p-10">
          <div>
            <Tag>Services</Tag>
            <h2 className="mt-6 max-w-3xl font-heading text-3xl font-bold tracking-tighter text-paper md:text-5xl">
              AI agents that run your marketing, bookings and website.
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {AGENTS.map((agent) => (
                <li
                  key={agent}
                  className="border border-line px-3 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted"
                >
                  {agent}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 self-start bg-neon px-6 py-4 font-heading font-bold text-night transition-colors hover:bg-paper md:self-auto"
          >
            Explore services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
