const modal = document.querySelector("#dialog");
const close1 = document.querySelector("#dialog-close1");
const close2 = document.querySelector("#dialog-close2");

function setTitle(content: string) {
  const element = document.querySelector("#dialog-title");

  if (element) {
    element.innerHTML = content;
  }
}

function setContent(content: string) {
  const element = document.querySelector("#dialog-content");

  if (element) {
    element.innerHTML = content;
  }
}

function setAction(action: string) {
  const element = document.querySelector("#dialog-action");

  if (element) {
    element.innerHTML = action;
    window.htmx.process(element);
  }
}

function open() {
  modal?.classList.remove("hidden");
  modal?.classList.add("flex");
}

function close() {
  setTitle("");
  setContent("");
  setAction("");

  modal?.classList.add("hidden");
  modal?.classList.remove("flex");
}

close1?.addEventListener("click", close);

close2?.addEventListener("click", close);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    close();
  }
});

document.addEventListener("trigger-dialog", (event) => {
  const custom = event as CustomEvent<{
    title: string;
    content: string;
    action: string;
  }>;
  const { title, content, action } = custom.detail;

  setTitle(title);
  setContent(content);
  setAction(action);
  open();
});

document.addEventListener("htmx:afterRequest", close);
