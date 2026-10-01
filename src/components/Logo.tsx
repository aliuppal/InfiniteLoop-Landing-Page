// The "rings" mark from the brand file: two linked loops, paper + neon, reading as ∞.
export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
      <circle cx="21" cy="20" r="14" fill="none" stroke="var(--paper)" strokeWidth="7" />
      <circle cx="43" cy="20" r="14" fill="none" stroke="var(--neon)" strokeWidth="7" />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="InfiniteLoop home">
      <LogoMark />
      <span className="font-heading text-xl font-bold tracking-tighter text-paper">
        InfiniteLoop
      </span>
    </a>
  );
}
