import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "InfiniteLoop — A software foundry",
  description:
    "InfiniteLoop is a SaaS studio that rapidly prototypes, iterates, and ships multiple cloud-based tools. We turn ideas into profitable, scalable businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${anton.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-night text-paper">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
