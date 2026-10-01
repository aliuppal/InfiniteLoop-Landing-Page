import { Reveal } from "@/components/Reveal";

const PRINCIPLES = [
  { label: "Small teams", body: "Two to four people per product, owning it end to end." },
  { label: "Real users", body: "Nothing ships on a hunch. Every feature answers someone who asked." },
  { label: "Honest numbers", body: "If a product isn't working, we say so and stop." },
];

// Manifesto band — the target of "Read our manifesto" and the "Studio" nav link.
export function Studio() {
  return (
    <section id="studio" className="bg-paper text-night">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <span className="inline-flex border border-night px-2.5 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em]">
          [&nbsp;The studio&nbsp;]
        </span>

        <Reveal>
          <blockquote className="mt-8 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-tighter md:text-6xl">
            We&apos;d rather ship ten small tools people love than pitch one big platform nobody
            asked for.
          </blockquote>
        </Reveal>

        <ul className="mt-14 grid gap-8 border-t-2 border-night pt-8 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <li key={p.label}>
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.18em]">{p.label}</h3>
              <p className="mt-2 leading-relaxed text-night/75">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
