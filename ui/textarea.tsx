import { cn } from "./utils.ts";

export type TextareaProperties = Hono.TextareaHTMLAttributes;

export function Textarea({
  class: className,
  ...properties
}: TextareaProperties) {
  return (
    <textarea
      class={cn(
        "flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...properties}
    />
  );
}
