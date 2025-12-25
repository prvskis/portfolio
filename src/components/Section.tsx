import clsx from "clsx";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  className?: string;
  feather?: boolean;
  center?: boolean;
  backdrop?: boolean; // ✅ thêm
}>;

export default function Section({
  id,
  className,
  feather = true,
  center = false,
  backdrop = true,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={clsx(
        "relative min-h-screen scroll-mt-24",
        feather && "feather",
        center ? "flex items-center py-24" : "py-24",
        className
      )}
    >
      {/* ✅ backdrop phủ theo chiều cao section */}
      {backdrop && (
        <div className="pointer-events-none absolute inset-0 -z-40 section-backdrop" />
      )}

      <div className="container-x relative z-10 w-full">{children}</div>
    </section>
  );
}
