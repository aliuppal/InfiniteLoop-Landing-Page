import type { Metadata } from "next";
import { ArrowRight, Mail, Megaphone, MessageSquareText, PhoneCall, type LucideIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Tag, type Tone } from "@/components/Tag";

export const metadata: Metadata = {
  title: "Services — AI agents by InfiniteLoop",
  description:
    "AI agents that run your marketing, bookings and website: social media, voice booking, email marketing and chat-to-edit websites for local businesses.",
};

type Agent = {
  name: string;
  tag: string;
  tone: Tone;
  icon: LucideIcon;
  does: string;
  forWho: string;
  result: string;
};

const AGENTS: Agent[] = [
  {
    name: "Social Media Agent",
    tag: "Marketing",
    tone: "neon",
    icon: Megaphone,
    does: "Plans, writes and posts content across Instagram, Facebook, LinkedIn and TikTok, and replies to comments and DMs.",
    forWho: "Salons, cafés, gyms, clinics and shops that know they should post every day but have no one to do it.",
    result: "A feed that never goes quiet, and every comment and DM answered, without hiring a social media manager.",
  },
  {
    name: "Voice Booking Agent",
    tag: "Bookings",
    tone: "cyan",
    icon: PhoneCall,
    does: "Answers calls 24/7, books appointments straight into your calendar, and handles reschedules.",
    forWho: "Clinics, dentists, salons and home-service trades that lose jobs every time the phone rings out.",
    result: "No missed calls and no receptionist cost. The calendar fills itself, even after hours.",
  },
  {
    name: "Email Marketing Agent",
    tag: "Retention",
    tone: "purple",
    icon: Mail,
    does: "Writes and sends campaigns and follow-ups, segments your list, and reports on opens and replies.",
    forWho: "Online stores, clinics, coaches and service businesses sitting on a customer list they never email.",
    result: "Campaigns go out every week, past customers come back, and you see exactly who opened and replied.",
  },
  {
    name: "Website Chat-Edit Agent",
    tag: "Website",
    tone: "neon",
    icon: MessageSquareText,
    does: "You type “change my prices” or “add a new service page” in chat, and your website updates.",
    forWho: "Any owner who waits days, and pays a developer, every time the website needs a small change.",
    result: "Site changes in minutes instead of days. No developer, no tickets, no waiting.",
  },
];

const INDUSTRIES = [
  { name: "Dental & medical clinics", fit: "Voice booking · Email" },
  { name: "Salons, spas & barbers", fit: "Voice booking · Social" },
  { name: "Gyms & fitness studios", fit: "Social · Email" },
  { name: "Restaurants & cafés", fit: "Social · Website" },
  { name: "Home services: plumbing, HVAC, electrical", fit: "Voice booking · Website" },
  { name: "Real estate agencies", fit: "Social · Email" },
  { name: "Law & accounting firms", fit: "Voice booking · Website" },
  { name: "Online stores & retail", fit: "Email · Social" },
];

const toneText: Record<Tone, string> = {
  neon: "text-neon",
  cyan: "text-cyan",
  purple: "text-purple",
  muted: "text-muted",
};

const hoverBorder: Record<Tone, string> = {
  neon: "hover:border-neon",
  cyan: "hover:border-cyan",
  purple: "hover:border-purple",
  muted: "hover:border-paper",
};

function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  const Icon = agent.icon;
  return (
    <Reveal delay={(index % 2) * 0.06} className="h-full">
      <article
        className={`flex h-full flex-col border border-line bg-surface p-6 transition-colors duration-200 md:p-8 ${hoverBorder[agent.tone]}`}
      >
        <div className="flex items-start justify-between gap-4">
          <Tag tone={agent.tone}>{agent.tag}</Tag>
          <span className={`font-display text-5xl leading-none ${toneText[agent.tone]}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-10 flex items-center gap-3 font-heading text-3xl font-bold tracking-tighter text-paper md:text-4xl">
          <Icon size={30} strokeWidth={1.75} className={`shrink-0 ${toneText[agent.tone]}`} aria-hidden="true" />
          {agent.name}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-paper/90">{agent.does}</p>

        {/* Pinned to the card bottom so both cards in a row line up. */}
        <div className="mt-auto pt-8">
          <dl className="grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted">Who it&apos;s for</dt>
              <dd className="mt-2 leading-relaxed text-muted">{agent.forWho}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted">What you get</dt>
              <dd className="mt-2 leading-relaxed text-paper">{agent.result}</dd>
            </div>
          </dl>
        </div>
      </article>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section id="top" className="mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:px-10">
          <Tag>Services</Tag>
          <h1 className="mt-8 max-w-6xl font-display text-[clamp(2.75rem,8vw,7rem)] uppercase leading-[0.92] tracking-tight text-paper">
            <span className="text-neon">AI agents</span> that run your marketing, bookings and website, so you
            don&apos;t have to.
          </h1>

          <div className="mt-12 grid gap-10 border-t-2 border-line pt-10 md:grid-cols-12 md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-muted md:col-span-7 md:text-xl">
              Four agents, each doing one job a small business usually can&apos;t staff: posting,
              answering the phone, emailing customers and keeping the website current.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <a
                href="#book-demo"
                className="group inline-flex items-center justify-center gap-2 bg-neon px-6 py-4 font-heading font-bold text-night transition-colors hover:bg-paper active:translate-y-px"
              >
                Book a demo
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#agents"
                className="inline-flex items-center justify-center border border-paper px-6 py-4 font-heading font-bold text-paper transition-colors hover:bg-paper hover:text-night active:translate-y-px"
              >
                See the agents
              </a>
            </div>
          </div>
        </section>

        {/* The four agents */}
        <section id="agents" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-10">
          <div className="flex flex-col gap-6 border-t-2 border-line pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag>The agents</Tag>
              <h2 className="mt-6 max-w-2xl font-heading text-4xl font-bold tracking-tighter text-paper md:text-6xl">
                Four agents. One less job each.
              </h2>
            </div>
            <p className="max-w-sm text-muted">
              Use one or all four. Each agent works on its own and plugs into the tools you already use.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {AGENTS.map((agent, i) => (
              <AgentCard key={agent.name} agent={agent} index={i} />
            ))}
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-10">
          <div className="border-t-2 border-line pt-10">
            <Tag>Who it&apos;s for</Tag>
            <h2 className="mt-6 max-w-4xl font-heading text-4xl font-bold tracking-tighter text-paper md:text-6xl">
              Built for businesses that run on calls, bookings and word of mouth.
            </h2>
          </div>

          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry, i) => (
              <li key={industry.name} className="flex flex-col gap-6 bg-night p-6">
                <span className="font-mono text-xs font-bold text-neon">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-heading text-xl font-bold tracking-tight text-paper">{industry.name}</span>
                <span className="mt-auto font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted">
                  {industry.fit}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Book a demo */}
        <section className="bg-paper text-night">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 md:flex-row md:items-end md:justify-between md:py-28 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-flex border border-night px-2.5 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em]">
                [&nbsp;Book a demo&nbsp;]
              </span>
              <h2 className="mt-8 font-heading text-4xl font-bold leading-[1.05] tracking-tighter md:text-6xl">
                See an agent work on your business.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-night/75">
                Tell us what you run and which job eats your week. We&apos;ll show you the agent doing it,
                live, with your own services and prices.
              </p>
            </div>
            <a
              href="#book-demo"
              className="group inline-flex shrink-0 items-center gap-2 self-start bg-night px-6 py-4 font-heading font-bold text-paper transition-colors hover:bg-neon hover:text-night md:self-auto"
            >
              Book a demo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
