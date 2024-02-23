const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    const getElement = getChangeElement(container, e.clientY);
    console.log(getElement);
    if (getElement === null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, getElement);
    }
  });
});

function getChangeElement(container, y) {
  const draggableElem = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  return draggableElem.reduce(
    (prev, nov) => {
      const elemRect = nov.getBoundingClientRect();
      const offset = y - elemRect.top - elemRect.height / 2;
      if (offset < 0 && offset > prev.offset) {
        return { offset: offset, element: nov };
      } else {
        return prev;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
