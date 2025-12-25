import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
