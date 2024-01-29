const tabs = document.querySelectorAll("[data-tab-nav]");
const tabContent = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("mouseenter", () => {
    const target = document.querySelector(tab.getAttribute("data-tab-nav"));
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    target.classList.add("active");
  });
});
