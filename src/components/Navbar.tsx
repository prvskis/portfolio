import clsx from "clsx";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export default function Navbar() {
  const activeId = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x pt-5">
        <div className="glass flex items-center justify-between rounded-2xl px-5 py-3">
          <button onClick={() => scrollToId("home")} className="text-sm font-semibold tracking-wide">
            <span className="muted2">kisie</span>
            <span className="mx-2 text-white/30">/</span>
            <span className="muted">portfolio</span>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className={clsx(
                  "rounded-full px-3 py-2 text-xs tracking-[0.24em] transition",
                  activeId === s.id
                    ? "bg-white text-black"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-xl border hairline px-4 py-2 text-xs tracking-[0.24em] text-white/80 hover:bg-white/10"
          >
            LET&apos;S TALK
          </a>
        </div>
      </div>
    </header>
  );
}
