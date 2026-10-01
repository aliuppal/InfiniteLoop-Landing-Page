// Single place for links. Replace the placeholders before launch.

// ContactForm posts here from the browser. Never rendered on the page; swap the address for
// FormSubmit's random alias string to keep it out of the JS bundle too.
export const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/aliuppal@gmail.com";

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Our work", href: "#process" },
  { label: "Studio", href: "#studio" },
  { label: "Blog", href: "#" },
] as const;

export const SOCIAL_LINKS = {
  github: "#",
  x: "#",
  linkedin: "#",
} as const;
