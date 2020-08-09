// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  offset: 160,
});

// Mobile navbar

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("menu-items")[0];
const navBarContainer = document.querySelector(".navbar-container");
console.log(navBarContainer);

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navBarContainer.classList.toggle("mobile-navbar-container");
});

const menuItems = Array.from(document.querySelectorAll(".menu-items a"));

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    navBarContainer.classList.toggle("mobile-navbar-container");
  })
);
