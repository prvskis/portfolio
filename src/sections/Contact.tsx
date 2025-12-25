import Section from "../components/Section";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <Section id="contact" center>
      <div className="text-center">
        <Reveal>
          <div className="label mb-4">CONTACT</div>
        </Reveal>

        <Reveal delayMs={80}>
          <h2 className="title-serif text-3xl md:text-5xl">
            Let’s build something
            <br />
            visually sharp.
          </h2>
        </Reveal>

        <Reveal delayMs={160}>
          <p className="muted mx-auto mt-5 max-w-xl leading-relaxed">
            Thay email/links của bạn vào đây. Section này giữ đúng tinh thần “CTA tối giản”.
          </p>
        </Reveal>

        <Reveal delayMs={220}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
              href="mailto:yourmail@example.com"
            >
              Email Me
            </a>
            <a
              className="rounded-full border hairline px-6 py-3 text-sm text-white/80 hover:bg-white/10"
              href="#"
            >
              GitHub
            </a>
            <a
              className="rounded-full border hairline px-6 py-3 text-sm text-white/80 hover:bg-white/10"
              href="#"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-16 text-sm muted2">
          © {new Date().getFullYear()} — React • TS • Tailwind
        </div>
      </div>
    </Section>
  );
}
