import clsx from "clsx";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  className?: string;
  center?: boolean;
}>;

export default function Section({
  id,
  className,
  center = false,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={clsx(
        "relative min-h-screen scroll-mt-24",
        center ? "flex items-center py-0" : "py-0",
        className
      )}
    >
      <div className="container-x relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}