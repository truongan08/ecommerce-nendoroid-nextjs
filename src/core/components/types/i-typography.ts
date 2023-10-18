import { BaseHTMLAttributes } from "react";
import { Size, Variant } from ".";

export interface TypoProps extends BaseHTMLAttributes<HTMLHeadingElement> {
  variant?: Variant;
  size?: Size;
}
