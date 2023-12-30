import clsx from "clsx";
import { twMerge } from "tailwind-merge";
type Tprops = (string | boolean | undefined | null)[];
export default function cn(...props: Tprops): string {
  return twMerge(clsx(...props));
}
