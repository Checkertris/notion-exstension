import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export { cva, VariantProps } from "class-variance-authority";

export type Variants = (...args: any) => any;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
