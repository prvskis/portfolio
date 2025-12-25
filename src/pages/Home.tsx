import ArtBackground from "../components/ArtBackground";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const SECTION_IDS = ["home", "about", "projects", "contact"];

export default function Home() {
  return (
    <div className="relative">
      <ArtBackground />
      <Navbar />

      {/* progress lines */}
      <ScrollProgress side="left" sectionIds={SECTION_IDS} />
      <ScrollProgress side="right" sectionIds={SECTION_IDS} />

      <main className="pt-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
