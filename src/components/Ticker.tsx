import { LogoMark } from "@/components/Logo";

const STEPS = ["Prototype", "Iterate", "Ship", "Measure", "Scale", "Repeat"];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {STEPS.map((step) => (
        <li key={step} className="flex items-center gap-8 pr-8">
          <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-paper">
            {step}
          </span>
          <LogoMark className="h-3.5 w-auto" />
        </li>
      ))}
    </ul>
  );
}

// The loop, literally: a marquee strip of the studio cycle. Pauses on hover, stops for reduced motion.
// Four copies so the strip stays filled on wide screens; the track scrolls by half its width.
export function Ticker() {
  return (
    <div
      className="ticker overflow-hidden border-y-2 border-paper py-4"
      role="img"
      aria-label="Our cycle: prototype, iterate, ship, measure, scale, repeat"
    >
      <div className="ticker-track flex w-max">
        <Row hidden />
        <Row hidden />
        <Row hidden />
        <Row hidden />
      </div>
    </div>
  );
}
