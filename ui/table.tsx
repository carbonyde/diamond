import { cn } from "./utils.ts";

export function Table({
  class: className,
  ...properties
}: Hono.TableHTMLAttributes) {
  return (
    <div class="relative w-full overflow-auto">
      <table
        class={cn("w-full caption-bottom text-sm", className)}
        {...properties}
      />
    </div>
  );
}

export function TableHeader({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return <thead class={cn("[&_tr]:border-b", className)} {...properties} />;
}

export function TableBody({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <tbody
      class={cn("[&_tr:last-child]:border-0", className)}
      {...properties}
    />
  );
}

export function TableFooter({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <tfoot
      class={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...properties}
    />
  );
}

export function TableRow({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <tr
      class={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...properties}
    />
  );
}

export function TableHead({
  class: className,
  ...properties
}: Hono.ThHTMLAttributes) {
  return (
    <th
      class={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...properties}
    />
  );
}

export function TableCell({
  class: className,
  ...properties
}: Hono.TdHTMLAttributes) {
  return (
    <td
      class={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
      {...properties}
    />
  );
}

export function TableCaption({
  class: className,
  ...properties
}: Hono.HTMLAttributes) {
  return (
    <caption
      class={cn("mt-4 text-sm text-muted-foreground", className)}
      {...properties}
    />
  );
}
