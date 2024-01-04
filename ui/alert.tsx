import { cva } from "class-variance-authority";
import { cn } from "./utils.ts";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Alert({
  class: className,
  variant,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <div
      role="alert"
      class={cn(alertVariants({ variant }), className)}
      {...properties}
    />
  );
}

export function AlertTitle({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <h5
      class={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...properties}
    />
  );
}

export function AlertDescription({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <div
      class={cn("text-sm [&_p]:leading-relaxed", className)}
      {...properties}
    />
  );
}
