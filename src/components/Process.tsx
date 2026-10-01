import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";

const STEPS = [
  {
    title: "Find the itch",
    body: "We start from a problem people already pay to solve badly. No idea moves forward until someone outside the studio asks for it.",
  },
  {
    title: "Prototype fast",
    body: "A working version in front of real users in weeks, not quarters. Rough edges are fine; guesses aren't.",
  },
  {
    title: "Ship and measure",
    body: "We launch small, watch what people actually do, and cut what they don't use.",
  },
  {
    title: "Scale or sunset",
    body: "Products that earn their keep get a dedicated team. The rest are shut down cleanly, and what we learned feeds the next loop.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-10">
      <div className="border-t-2 border-line pt-10">
        <Tag>Our process</Tag>
        <h2 className="mt-6 font-heading text-4xl font-bold tracking-tighter text-paper md:text-6xl">
          How a loop runs.
        </h2>
      </div>

      <ol className="mt-12">
        {STEPS.map((step, i) => (
          <li key={step.title} className="border-t-2 border-line py-8 md:py-10">
            <Reveal className="grid gap-4 md:grid-cols-12 md:gap-8">
              <span className="font-display text-6xl leading-none text-neon md:col-span-3 md:text-8xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-9 md:pt-2">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-paper md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
