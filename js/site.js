const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger-menu");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});
