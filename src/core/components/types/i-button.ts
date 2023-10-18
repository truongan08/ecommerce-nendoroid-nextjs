import { ComponentProps } from "react";
import { Size, Variant } from ".";

// export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
export interface BtnProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
  pill?: boolean;
  loading?: boolean;
}
