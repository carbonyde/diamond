import AirDatepicker from "air-datepicker";

const isMobile = window.innerWidth < 768;
const datepicker = new AirDatepicker("#$id", {
  isMobile: isMobile,
  autoClose: isMobile,
  locale: $locale,
  altField: "#$name-value",
  altFieldDateFormat: "yyyy-MM-dd",
});

if ($dateValue) {
  datepicker.selectDate(
    $dateValue + new Date().getTimezoneOffset() * 60 * 1000,
  );
}
