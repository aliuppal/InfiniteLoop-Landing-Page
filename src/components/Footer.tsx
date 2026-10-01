import { ContactForm } from "@/components/ContactForm";
import { LogoMark } from "@/components/Logo";
import { SOCIAL_LINKS } from "@/lib/site";

const COLUMNS = [
  { title: "Products", links: [["TaskFlow", "#products"], ["InvoiceAI", "#products"], ["DataSync", "#products"], ["Loop #4", "#products"]] },
  { title: "Company", links: [["Studio", "#studio"], ["Process", "#process"], ["Careers", "#"], ["Contact", "#contact"]] },
  { title: "Resources", links: [["Blog", "#"], ["Manifesto", "#studio"], ["Changelog", "#"], ["Press kit", "#"]] },
  { title: "Legal", links: [["Privacy", "#"], ["Terms", "#"], ["Cookies", "#"]] },
] as const;

// Lucide dropped brand icons, so these three are inline 24px glyphs.
const SOCIALS = [
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    path: "M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z",
  },
  {
    label: "X",
    href: SOCIAL_LINKS.x,
    path: "M18.9 1.2h3.7l-8 9.2 9.4 12.4h-7.4l-5.8-7.5-6.6 7.5H.5L9 13 0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.5h2L6.5 3.2H4.3l13.3 17.5Z",
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    path: "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t-2 border-paper">
      <div className="mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 md:pt-28 lg:px-10">
        {/* Contact CTA */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-tighter text-paper md:text-6xl">
            Have a problem worth a product?
          </h2>
          <ContactForm />
        </div>

        {/* Mega wordmark */}
        <div className="mt-20 flex items-center gap-[2vw] overflow-hidden border-t-2 border-line pt-10" aria-hidden="true">
          <LogoMark className="h-[min(7vw,6.5rem)] w-auto shrink-0" />
          <span className="font-heading text-[min(11.5vw,10.5rem)] font-bold leading-none tracking-tighter text-paper">
            InfiniteLoop
          </span>
        </div>

        {/* Link grid */}
        <nav aria-label="Footer" className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-paper transition-colors hover:text-neon">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col-reverse gap-6 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            © {year} InfiniteLoop. Built in loops.
          </p>
          <ul className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center border border-line text-paper transition-colors hover:border-neon hover:text-neon"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
