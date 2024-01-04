import { createId } from "@paralleldrive/cuid2";
import { Script } from "carbon/script.tsx";
import { html } from "hono/html";
import { jsx, type Child } from "hono/jsx";

interface Properties {
  title: Child;
  trigger: Child;
  content: Child;
  action: Child;
}

function clientHtml(children: Child) {
  return html`${jsx(() => <>{children}</>, {})}`;
}

export function DialogTrigger({ title, trigger, content, action }: Properties) {
  const id = createId();
  const triggerId = `dialog-trigger-${id}`;

  return (
    <>
      <div id={triggerId}>{trigger}</div>

      <Script
        url={import.meta.url}
        src="./dialog-trigger.script.ts"
        variables={{
          $triggerId: triggerId,
          $title: clientHtml(title),
          $content: clientHtml(content),
          $action: clientHtml(action),
        }}
      />
    </>
  );
}
