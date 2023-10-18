import { PropsWithChildren } from "react";
import clsx from "clsx";

import { SectionProps } from "../types/i-section";

const Section = ({
  centered = true,
  children,
  className,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      className={clsx(`${className} mb-4`, { "container mx-auto": centered })}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
