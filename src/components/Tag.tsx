// Sharp, bracketed mono label — e.g. [ ACTIVE PROJECTS ].
const tones = {
  neon: "border-neon text-neon",
  cyan: "border-cyan text-cyan",
  purple: "border-purple text-purple",
  muted: "border-line text-muted",
} as const;

export type Tone = keyof typeof tones;

export function Tag({
  children,
  tone = "neon",
  brackets = true,
}: {
  children: React.ReactNode;
  tone?: Tone;
  brackets?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] ${tones[tone]}`}
    >
      {brackets ? <>[&nbsp;{children}&nbsp;]</> : children}
    </span>
  );
}
