const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const animationMenu = document.querySelector(".menu li");
burger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});
