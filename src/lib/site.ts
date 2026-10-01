// Single place for links. Replace the placeholders before launch.
// Contact messages go through ContactForm; the recipient lives server-side in app/actions.ts.

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
