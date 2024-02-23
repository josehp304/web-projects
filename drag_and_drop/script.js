const draggables = document.querySelectorAll(".draggable");
const container = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

container.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    getElement = getChangeElement(container, e.clientY);
  });
});

function getChangeElement(container, y) {
  draggableElem = [...container.querrySelectorAll(".draggable:not(.dragging)")];
  draggableElem.reduce((prev, nov) => {}, { offset: Number.NEGATIVE_INFINITY });
}
