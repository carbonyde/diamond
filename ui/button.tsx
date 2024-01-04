import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./icon.tsx";
import { cn } from "./utils.ts";

export const buttonVariants = cva(
  "inline-flex items-center justify-center items-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8 py-4 text-base",
        xl: "h-12 rounded-lg px-12 py-6 text-base",
        icon: "h-10 w-10",
        "icon-sm": "rounded-lg px-3 h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface Properties
  extends Hono.ButtonHTMLAttributes,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({
  class: className,
  variant,
  size,
  children,
  loading = true,
  ...properties
}: Properties) {
  return (
    <button
      class={cn(buttonVariants({ variant, size, className }))}
      type="button"
      hx-disabled-elt="this"
      {...properties}
    >
      {loading && (
        <span class="htmx-indicator">
          <Icon name="loader2" class="h-4 w-4 animate-spin" />
        </span>
      )}
      {children}
    </button>
  );
}
