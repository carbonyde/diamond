import { cn } from "./utils.ts";

export type Properties = Hono.InputHTMLAttributes;

export function Input({ class: className, type, ...properties }: Properties) {
  return (
    <input
      type={type}
      class={cn(
        "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...properties}
    />
  );
}
