import type { Child } from "hono/jsx";

export function Layout({ children }: { children: Child }) {
  return (
    <div class="container flex h-screen flex-col items-center justify-center overflow-auto">
      {children}
    </div>
  );
}
