"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10"
        aria-label="Main"
      >
        <Logo />

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-heading text-[0.95rem] font-bold text-paper transition-colors hover:text-neon"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden border border-paper px-4 py-2 font-heading text-sm font-bold text-paper transition-colors hover:border-neon hover:bg-neon hover:text-night sm:inline-flex"
          >
            Get in Touch
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block border-b border-line py-4 font-heading text-2xl font-bold text-paper hover:text-neon"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#contact"
                onClick={close}
                className="inline-flex bg-neon px-5 py-3 font-heading font-bold text-night"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
