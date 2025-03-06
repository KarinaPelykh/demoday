"use strict"
const burgerMenu = document.querySelector(".burger-menu-js");

const modal = document.querySelector(".burger-menu-modal");

const close = document.querySelector(".close-js");

burgerMenu.addEventListener("click", () => {
  modal.classList.add("open");
});

close.addEventListener("click", () => {
  modal.classList.remove("open");
});
