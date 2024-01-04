const modal = document.querySelector("#modal-$id");
const close1 = document.querySelector("#close1");
const close2 = document.querySelector("#close2");

function unload() {
  document.querySelector("#script-$id")?.remove();
}

function close() {
  modal?.remove();
  unload();
}

close1?.addEventListener("click", close);

close2?.addEventListener("click", close);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    close();
  }

  if (event.key === "ArrowLeft") {
    const previous = document.querySelector<HTMLButtonElement>("#arrow-left");

    if (previous) {
      previous.click();
      unload();
    }
  }

  if (event.key === "ArrowRight") {
    const next = document.querySelector<HTMLButtonElement>("#arrow-right");

    if (next) {
      next.click();
      unload();
    }
  }
});

document.addEventListener("htmx:beforeSwap", (event) => {
  const target = event.target as HTMLDivElement;

  if (target.id.includes("modal-")) {
    unload();
  }
});
