import { createId } from "@paralleldrive/cuid2";
import { Script } from "carbon/script.tsx";
import dayjs from "dayjs";
import { Icon } from "./icon.tsx";
import { Input } from "./input.tsx";
import { cn } from "./utils.ts";

const locales = {
  es: {
    days: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    daysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthsShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    today: "Hoy",
    clear: "Limpiar",
    dateFormat: "dd/MM/yyyy",
    timeFormat: "hh:mm aa",
    firstDay: 1,
  },
  en: {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    clear: "Clear",
    dateFormat: "MM/dd/yyyy",
    timeFormat: "hh:mm aa",
    firstDay: 0,
  },
  pt: {
    days: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    daysMin: ["Do", "Se", "Te", "Qa", "Qi", "Sx", "Sa"],
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    today: "Hoje",
    clear: "Limpar",
    dateFormat: "dd/MM/yyyy",
    timeFormat: "HH:mm",
    firstDay: 1,
  },
};

export type Properties = Hono.InputHTMLAttributes & {
  locale: "es" | "en" | "pt";
};

export function Datepicker({
  name,
  value,
  class: className,
  locale = "es",
  ...properties
}: Properties) {
  const id = `datepicker-${createId()}`;

  return (
    <>
      <div class={cn(className, "relative flex")}>
        <Input id={id} type="text" />

        <input
          class="absolute bottom-0 left-0 h-px w-px opacity-0"
          id={`${name}-value`}
          name={name}
          value={value}
          {...properties}
        />

        <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center">
          <Icon name="calendar" class="h-4 w-4" />
        </span>
      </div>

      <link
        rel="stylesheet"
        href="https://unpkg.com/air-datepicker@3.4.0/air-datepicker.css"
      />

      <Script
        url={import.meta.url}
        src="./datepicker.script.ts"
        variables={{
          $id: id,
          $dateValue: value ? dayjs(value as string).unix() * 1000 : undefined,
          $name: name,
          $locale: locales[locale],
        }}
      />
    </>
  );
}
