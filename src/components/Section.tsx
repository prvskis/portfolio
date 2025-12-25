import type { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export default function Section({ id, className, children }: Props) {
  return (
    <section
      id={id}
      className={clsx(
        "min-h-screen scroll-mt-20 px-6 py-20 md:px-10",
        className
      )}
    >
      {children}
    </section>
  );
}
