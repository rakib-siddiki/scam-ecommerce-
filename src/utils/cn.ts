import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export default function cn(...props: ClassValue[]): string {
  return twMerge(clsx(...props));
}
