import Section from "../components/Section";
import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <Section id="home" className="flex items-center">
      <div className="w-full">
        <Reveal>
          <p className="text-sm text-white/60">Frontend Developer • React • TS</p>
        </Reveal>

        <Reveal delayMs={80}>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
            Build clean UI, ship fast.
          </h1>
        </Reveal>

        <Reveal delayMs={160}>
          <p className="mt-5 max-w-xl text-white/70">
            Portfolio landingpage với scroll navigation và animation theo cuộn.
          </p>
        </Reveal>

        <Reveal delayMs={240}>
          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
