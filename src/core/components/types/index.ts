import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

export type Variant = "primary" | "secondary" | "danger" | "outlined";

export type Size = "sm" | "md" | "lg" | "xl";

export type TRatingRange = 1 | 2 | 3 | 4 | 5;

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: ReactNode;
}

export interface SelectInputProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  icon?: ReactNode;
  options: { value: string | number; label: string }[];
}

export interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isStatic?: boolean;
}

export interface ModalProps extends OverlayProps {
  title: string;
}

export interface DrawerProps extends OverlayProps {
  title?: string;
}

export interface SpinnerProps {
  color: string;
  fontSize: number;
  className?: string;
  height?: number;
}

export type CrumbItem = {
  label: ReactNode;
  isLast: boolean;
  path: string;
};

export type BreadcrumbsProps = {
  children: ReactNode;
};

export interface DropdownOption {
  logo: string;
  slug: string;
}

export interface DropdownProps {
  options: DropdownOption[];
}
