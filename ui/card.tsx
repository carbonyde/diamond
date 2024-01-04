import { cn } from "./utils.ts";

export function Card({ class: className, ...properties }: Hono.HTMLAttributes) {
  return (
    <div
      class={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className,
      )}
      {...properties}
    />
  );
}

export function CardHeader({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <div
      class={cn("flex flex-col space-y-1.5 p-6", className)}
      {...properties}
    />
  );
}

export function CardTitle({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <h3
      class={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...properties}
    />
  );
}

export function CardDescription({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <p class={cn("text-sm text-muted-foreground", className)} {...properties} />
  );
}

export function CardContent({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return <div class={cn("p-6 pt-0", className)} {...properties} />;
}

export function CardFooter({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <div
      class={cn("flex items-center justify-end p-6 pt-0", className)}
      {...properties}
    />
  );
}
