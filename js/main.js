const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
