import Section from "../components/Section";
import Reveal from "../components/Reveal";

type Project = {
  title: string;
  desc: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Classroom Manager",
    desc: "Dashboard + test results + analytics (teacher view).",
    tags: ["React", "Node", "MongoDB"],
  },
  {
    title: "Realtime Mini Games",
    desc: "Simple PvP web games with real-time sync.",
    tags: ["WebSocket", "Canvas", "TS"],
  },
  {
    title: "AI Demo Hub",
    desc: "Landing + demo pages for ML/AI showcases.",
    tags: ["UI", "MLOps", "Deploy"],
  },
];

export default function Projects() {
  return (
    <Section id="projects" center>
      <Reveal>
        <div className="label mb-10">PROJECTS</div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-12">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delayMs={idx * 150} className="md:col-span-4">
            <article className="card p-6 h-full">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="label text-[10px]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="muted mt-3 leading-relaxed">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border hairline bg-white/5 px-3 py-1 text-xs text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white underline decoration-white/20 underline-offset-4"
                >
                  View case →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
