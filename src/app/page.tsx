import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Studio } from "@/components/Studio";
import { Ticker } from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <Process />
        <Studio />
      </main>
      <Footer />
    </>
  );
}
