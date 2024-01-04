// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { raw } from "hono/html";
import * as lucide from "lucide-static/lib";

interface Properties {
  name: string;
  class?: string;
}

export function Icon({ name, class: className = "" }: Properties) {
  return raw(lucide[name].replace("<svg", `<svg class="${className}"`));
}
