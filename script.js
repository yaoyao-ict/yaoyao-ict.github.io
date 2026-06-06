const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");
const searchDialog = document.querySelector("[data-search-dialog]");
const searchButton = document.querySelector("[data-open-search]");
const themeButton = document.querySelector("[data-theme]");
const menuButtons = document.querySelectorAll(".nav-menu-trigger");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

menuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = button.closest(".nav-menu");
    const isOpen = menu.classList.contains("open");

    document.querySelectorAll(".nav-menu.open").forEach((openMenu) => {
      openMenu.classList.remove("open");
      openMenu.querySelector(".nav-menu-trigger")?.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      menu.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".nav-menu.open").forEach((menu) => {
    menu.classList.remove("open");
    menu.querySelector(".nav-menu-trigger")?.setAttribute("aria-expanded", "false");
  });
});

searchButton?.addEventListener("click", () => {
  if (typeof searchDialog.showModal === "function") {
    searchDialog.showModal();
  }
});

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.textContent = document.body.classList.contains("dark") ? "Light" : "Theme";
});
