import Section from "../components/Section";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <Section id="contact" className="flex items-center">
      <div className="w-full">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-5 max-w-xl text-white/70">
            Contact section content goes here.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

