import { Script } from "carbon/script.tsx";
import { Button } from "./button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card.tsx";
import { Icon } from "./icon.tsx";

export function Dialog() {
  return (
    <>
      <div
        id="dialog"
        class="fixed inset-x-0 inset-y-0 z-[1000] hidden flex-col items-center justify-center"
      >
        <div
          id="dialog-close1"
          class="absolute inset-x-0 inset-y-0 z-10 cursor-pointer bg-background/10 backdrop-blur"
        />

        <div class="relative z-30 max-h-full w-full max-w-2xl">
          <Card class="w-full">
            <CardHeader class="flex flex-row items-center justify-between">
              <CardTitle id="dialog-title" />
              <Button
                id="dialog-close2"
                variant="ghost"
                size="icon"
                class="absolute right-3 top-2"
              >
                <Icon name="x" class="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent>
              <CardDescription id="dialog-content" />
            </CardContent>

            <CardFooter id="dialog-action" />
          </Card>
        </div>
      </div>

      <Script url={import.meta.url} src="./dialog.script.ts" />
    </>
  );
}
