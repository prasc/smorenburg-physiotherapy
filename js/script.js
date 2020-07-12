// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  offset: 190,
});

// Mobile navbar

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("menu-items")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const menuItems = Array.from(document.querySelectorAll(".menu-items a"));

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  })
);
