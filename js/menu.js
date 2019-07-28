window.onload = function() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const animationMenu = document.querySelector(".menu li");
  burger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
  });

  animationMenu.forEach(link => {
    console.log(link);
    link.style.animation = `navLinks 0.2s ease-in`;
  });
};
