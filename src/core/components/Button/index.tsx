import { PropsWithChildren } from "react";
import clsx from "clsx";

import { BtnProps } from "../types/i-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const classes = {
  size: {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-8 py-3 text-lg",
    xl: "px-8 py-3 text-xl",
  },
  variant: {
    primary:
      "text-white enabled:hover:bg-transparent bg-primary border border-primary rounded-md enabled:hover:text-primary focus:ring-primary-500 focus:ring-opacity-50",
    secondary:
      "text-white enabled:hover:text-secondary bg-secondary enabled:hover:bg-white border border-transparent enabled:hover:border-secondary focus:ring-secondary-500 focus:ring-opacity-50",
    danger:
      "text-primary bg-transparent border border-transparent enabled:hover:border-primary focus:ring-red-500 focus:ring-opacity-50",
    outlined:
      "bg-transparent text-primary-800 enabled:hover:bg-primary-500 enabled:hover:text-white enabled:hover:border-transparent border border-primary-500 focus:ring-opacity-50 font-semibold",
  },
};

const Button = ({
  pill = false,
  size = "md",
  variant = "primary",
  disabled = false,
  className,
  loading,
  children,
  ...props
}: PropsWithChildren<BtnProps>) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        `${className} focus:ring-2 focus:outline-none enabled:transition enabled:ease-in-out duration-300 rounded ${classes.size[size]} ${classes.variant[variant]}}`,
        {
          "opacity-50 cursor-not-allowed": disabled,
          "rounded-full": pill,
        }
      )}
      {...props}
    >
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
