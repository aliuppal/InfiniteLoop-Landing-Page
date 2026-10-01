"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { CONTACT_ENDPOINT } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full border-2 border-line bg-night px-4 py-3 text-paper placeholder:text-muted outline-none transition-colors focus:border-neon";
const label = "font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted";

export function ContactForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const open = () => dialogRef.current?.showModal();
  const close = () => {
    dialogRef.current?.close();
    if (status === "success") setStatus("idle");
  };

  // FormSubmit blocks server-to-server requests (Cloudflare 403), so the browser posts directly.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("company")) return setStatus("success"); // honeypot

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const text = String(form.get("text") ?? "").trim();

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Infinite Loop - ${name} - ${email}`,
          _replyto: email,
          _template: "box",
          _captcha: "false",
          name,
          email,
          message: text,
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
      if (!res.ok || String(data?.success) !== "true") {
        throw new Error(data?.message ?? `HTTP ${res.status}`);
      }
      setStatus("success");
    } catch (err) {
      console.error("Contact form send failed:", err);
      setError("Couldn't send right now. Please try again in a minute.");
      setStatus("error");
    }
  }

  const sent = status === "success";

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group inline-flex items-center gap-2 self-start bg-neon px-6 py-4 font-heading font-bold text-night transition-colors hover:bg-paper md:self-auto"
      >
        Send us a message
        <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-title"
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto w-[calc(100%-2rem)] max-w-lg border-2 border-paper bg-night p-0 text-paper backdrop:bg-night/80 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="contact-title" className="font-heading text-3xl font-bold tracking-tighter">
              {sent ? "Message sent." : "Tell us the problem."}
            </h2>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line transition-colors hover:border-neon hover:text-neon"
            >
              <X size={18} />
            </button>
          </div>

          {sent ? (
            <div className="mt-6 space-y-6">
              <p className="text-muted">Thanks for reaching out. We read every message and will reply to your email soon.</p>
              <button
                type="button"
                onClick={close}
                className="bg-neon px-6 py-3 font-heading font-bold text-night transition-colors hover:bg-paper"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="space-y-2">
                <label htmlFor="contact-name" className={label}>Name</label>
                <input id="contact-name" name="name" required autoComplete="name" maxLength={120} className={field} />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className={label}>Email address</label>
                <input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={200} className={field} />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-text" className={label}>Message</label>
                <textarea id="contact-text" name="text" required rows={5} maxLength={5000} className={`${field} resize-y`} />
              </div>
              {/* Honeypot for bots, hidden from people and screen readers. */}
              <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              {status === "error" && (
                <p role="alert" className="border-l-2 border-neon pl-3 text-sm text-paper">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 bg-neon px-6 py-4 font-heading font-bold text-night transition-colors hover:bg-paper disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
