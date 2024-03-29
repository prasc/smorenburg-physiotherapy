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
const logoContainerTwo = document.querySelector(".logo-container-two");

toggleButton.addEventListener("click", () => {
  var w = window.innerWidth;

  navbarLinks.classList.toggle("active");

  if (w < 1000) {
    navBarContainer.classList.toggle("mobile-navbar-container");
  }

  if (navBarContainer.classList.contains("mobile-navbar-container")) {
    logoContainerTwo.style.display = "none";
  } else {
    logoContainerTwo.style.display = "block";
  }
});

const menuItems = Array.from(document.querySelectorAll(".menu-items a"));

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    if (w < 1000) {
      var w = window.innerWidth;

      if ((logoContainerTwo.style.display = "none")) {
        logoContainerTwo.style.display = "block";
      }
  
      navbarLinks.classList.toggle("active");
      if (w < 1000) {
        navBarContainer.classList.toggle("mobile-navbar-container");
      }
    }
  })
);


window.addEventListener("resize", function () {
  var w = window.innerWidth;
  if (w > 1000) {
    logoContainerTwo.style.display = "none"
   } 

})
