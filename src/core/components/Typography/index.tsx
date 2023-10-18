import { PropsWithChildren } from "react";
import clsx from "clsx";

import { TypoProps } from "../types/i-typography";

const classes = {
  size: {
    sm: "py-1 text-sm",
    md: "py-2",
    lg: "py-3 text-lg",
    xl: "py-3 text-xl",
  },
  variant: {
    primary: "text-white",
    secondary: "text-secondary",
    danger: "text-red",
    outlined: "",
  },
};

const Typography = ({
  variant = "primary",
  size = "md",
  children,
  ...props
}: PropsWithChildren<TypoProps>) => {
  return (
    <h1
      className={clsx(
        `text-ellipsis overflow-hidden whitespace-nowrap font-roboto focus:outline-none transition ease-in-out duration-300 rounded ${classes.size[size]} ${classes.variant[variant]}}`
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Typography;
