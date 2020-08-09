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

toggleButton.addEventListener("click", () => {
  var w = window.innerWidth;

  navbarLinks.classList.toggle("active");

  if (w < 1000) {
    console.log(w);
    navBarContainer.classList.toggle("mobile-navbar-container");
  }
});

const menuItems = Array.from(document.querySelectorAll(".menu-items a"));

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    var w = window.innerWidth;

    navbarLinks.classList.toggle("active");

    if (w < 1000) {
      console.log(w);
      navBarContainer.classList.toggle("mobile-navbar-container");
    }
  })
);
