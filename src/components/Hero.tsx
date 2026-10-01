import { ArrowRight } from "lucide-react";
import { Tag } from "@/components/Tag";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:px-10">
      <Tag>A software foundry</Tag>

      <h1 className="mt-8 font-display text-[clamp(3.5rem,12.5vw,10rem)] uppercase leading-[0.9] tracking-tight text-paper">
        We build the{" "}
        <span className="text-neon [text-shadow:0_0_48px_rgb(204_255_0/0.35)]">software</span>{" "}
        that builds businesses.
      </h1>

      <div className="mt-12 grid gap-10 border-t-2 border-line pt-10 md:grid-cols-12 md:items-end">
        <p className="max-w-xl text-lg leading-relaxed text-muted md:col-span-7 md:text-xl">
          InfiniteLoop is a SaaS studio that rapidly prototypes, iterates, and ships multiple
          cloud-based tools. We turn ideas into profitable, scalable businesses.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
          <a
            href="#products"
            className="group inline-flex items-center justify-center gap-2 bg-neon px-6 py-4 font-heading font-bold text-night transition-colors hover:bg-paper active:translate-y-px"
          >
            View our portfolio
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#studio"
            className="inline-flex items-center justify-center border border-paper px-6 py-4 font-heading font-bold text-paper transition-colors hover:bg-paper hover:text-night active:translate-y-px"
          >
            Read our manifesto
          </a>
        </div>
      </div>
    </section>
  );
}
