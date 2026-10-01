"use server";

import { headers } from "next/headers";

// Recipient stays server-side so it never ships in the page or JS bundle.
const CONTACT_TO = process.env.CONTACT_TO ?? "aliuppal@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fields?: { name: string; email: string; text: string };
};

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim().slice(0, 120);
  const email = String(formData.get("email") ?? "").trim().slice(0, 200);
  const text = String(formData.get("text") ?? "").trim().slice(0, 5000);
  const fields = { name, email, text };

  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company")) return { status: "success" };

  if (!name || !email || !text) {
    return { status: "error", message: "Please fill in your name, email and message.", fields };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That email address doesn't look right.", fields };
  }

  // FormSubmit rejects requests without a site origin, so pass ours along.
  const h = await headers();
  const origin = h.get("origin") ?? `https://${h.get("host") ?? "localhost"}`;

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: `${origin}/`,
      },
      body: JSON.stringify({
        _subject: `Infinite Loop - ${name} - ${email}`,
        _replyto: email,
        _template: "box",
        _captcha: "false",
        name,
        email,
        message: text,
      }),
      cache: "no-store",
    });
    const data = (await res.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
    // e.g. "This form needs Activation..." until the inbox owner clicks FormSubmit's activation link.
    if (!res.ok || String(data?.success) !== "true") {
      throw new Error(`FormSubmit ${res.status}: ${data?.message ?? "no response body"}`);
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return { status: "error", message: "Couldn't send right now. Please try again in a minute.", fields };
  }

  return { status: "success" };
}
