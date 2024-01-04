import { readdir } from "node:fs/promises";
import { Button } from "~/ui/button.tsx";
import { Html } from "carbon/html.tsx";

const dirname = new URL(".", import.meta.url).pathname;

const pages = await readdir(dirname);

export default function Home() {
  return (
    <Html class="dark">
      <div class="container">
        <h1 class="py-4">Components</h1>

        <div class="flex flex-col">
          {pages
            .filter((page) => !page.includes("home"))
            .map((page) => (
              <a href={`/${page.split(".")[0]}`} target="_blank">
                <Button variant="link">{page}</Button>
              </a>
            ))}
        </div>
      </div>
    </Html>
  );
}
