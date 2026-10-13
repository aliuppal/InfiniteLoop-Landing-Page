import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Studio } from "@/components/Studio";
import { Ticker } from "@/components/Ticker";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <Work />
        <Process />
        <Studio />
      </main>
      <Footer />
    </>
  );
}
