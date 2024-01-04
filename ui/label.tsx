import { cva } from "class-variance-authority";
import { cn } from "./utils.ts";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

export function Label({
  class: className,
  ...properties
}: Hono.LabelHTMLAttributes) {
  return <label class={cn(labelVariants(), className)} {...properties} />;
}
