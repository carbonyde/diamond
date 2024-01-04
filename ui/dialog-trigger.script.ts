const trigger = document.querySelector("#$triggerId");

trigger?.addEventListener("click", () => {
  const event = new CustomEvent("trigger-dialog", {
    detail: {
      content: $content,
      action: $action,
      title: $title,
    },
  });

  document.dispatchEvent(event);
});
