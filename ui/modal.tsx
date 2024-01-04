import { Script } from "carbon/script.tsx";
import type { Child } from "hono/jsx";
import { Icon } from "./icon.tsx";

interface Properties {
  children: Child;
  id: string;
  previous?: string;
  next?: string;
}

export function Modal({ children, id, previous, next }: Properties) {
  return (
    <>
      <div
        id={`modal-${id}`}
        class="fixed inset-x-0 inset-y-0 z-[1000] flex flex-col items-center justify-center"
      >
        <div
          id="close1"
          class="absolute inset-x-0 inset-y-0 z-10 cursor-pointer bg-background/10 backdrop-blur"
        />
        <div
          id="close2"
          class="absolute right-0 top-0 z-50 m-4 cursor-pointer rounded-full bg-foreground p-2 text-background hover:opacity-50"
        >
          <Icon name="x" class="h-[1.2rem] w-[1.2rem]" />
        </div>

        {previous && (
          <div class="absolute inset-y-0 left-0 flex h-full items-center">
            <div
              hx-get={previous}
              hx-target={`#modal-${id}`}
              hx-swap="outerHTML"
              class="z-50 m-4 cursor-pointer rounded-full bg-foreground p-2 text-background hover:opacity-50"
              id="arrow-left"
            >
              <Icon name="chevronLeft" class="h-[1.2rem] w-[1.2rem]" />
            </div>
          </div>
        )}

        {next && (
          <div class="absolute inset-y-0 right-0 flex h-full items-center">
            <div
              hx-get={next}
              hx-target={`#modal-${id}`}
              hx-swap="outerHTML"
              class="z-50 m-4 cursor-pointer rounded-full bg-foreground p-2 text-background hover:opacity-50"
              id="arrow-right"
            >
              <Icon name="chevronRight" class="h-[1.2rem] w-[1.2rem]" />
            </div>
          </div>
        )}

        {children}
      </div>

      <Script
        url={import.meta.url}
        src="./modal.script.ts"
        id={`script-${id}`}
        variables={{ $id: id }}
      />
    </>
  );
}
