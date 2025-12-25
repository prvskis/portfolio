import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

type Props = {
  /** "left" | "right" */
  side?: "left" | "right";
  /** ids các section để đánh dấu điểm */
  sectionIds: string[];
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

export default function ScrollProgress({ side = "left", sectionIds }: Props) {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const markers = useMemo(() => sectionIds.map((id) => `#${id}`), [sectionIds]);

  useEffect(() => {
    let raf = 0;

    const getDocProgress = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      return clamp01(scrollTop / max);
    };

    const getActiveSectionIndex = () => {
      // lấy section có top gần giữa viewport nhất
      const mid = window.innerHeight * 0.45;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = idx;
        }
      });

      return best;
    };

    const tick = () => {
      setProgress(getDocProgress());
      setActiveIndex(getActiveSectionIndex());
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  const sideClass = side === "left" ? "left-6 md:left-10" : "right-6 md:right-10";

  return (
    <div className={clsx("pointer-events-none fixed top-0 z-40", sideClass)}>
      {/* Track */}
      <div className="relative h-screen w-[10px]">
        {/* thin line */}
        <div className="absolute left-1/2 top-[110px] h-[calc(100vh-220px)] w-px -translate-x-1/2 bg-white/10" />

        {/* progress glow */}
        <div
          className="absolute left-1/2 top-[110px] w-px -translate-x-1/2"
          style={{
            height: `calc((100vh - 220px) * ${progress})`,
            background:
              "linear-gradient(to bottom, rgba(74,210,255,0.0), rgba(74,210,255,0.55), rgba(255,87,179,0.45))",
            boxShadow:
              "0 0 18px rgba(74,210,255,0.22), 0 0 26px rgba(255,87,179,0.14)",
          }}
        />

        {/* markers */}
        <div className="absolute left-1/2 top-[110px] h-[calc(100vh-220px)] -translate-x-1/2">
          {markers.map((hash, idx) => {
            const y = markers.length === 1 ? 0 : (idx / (markers.length - 1)) * 100;

            const isActive = idx === activeIndex;
            return (
              <div
                key={hash}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: `${y}%` }}
              >
                <div
                  className={clsx(
                    "h-2 w-2 rounded-full border transition-all",
                    isActive
                      ? "bg-white/90 border-white/30 scale-110"
                      : "bg-white/20 border-white/15"
                  )}
                  style={{
                    boxShadow: isActive
                      ? "0 0 14px rgba(74,210,255,0.25), 0 0 18px rgba(255,87,179,0.12)"
                      : undefined,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
