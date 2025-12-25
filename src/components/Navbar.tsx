import clsx from "clsx";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // update hash (không reload)
  history.replaceState(null, "", `#${id}`);
}

export default function Navbar() {
  const activeId = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToId("home")}
          className="text-sm font-semibold tracking-wide"
        >
          kisie.dev
        </button>

        <div className="flex gap-1">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToId(s.id)}
              className={clsx(
                "rounded-full px-3 py-1.5 text-sm transition",
                activeId === s.id
                  ? "bg-white text-black"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
