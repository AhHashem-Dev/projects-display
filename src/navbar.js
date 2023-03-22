import select from "./utils/utils.js";

const navMenu = select(".nav-links-menu");
const navBtn = select(".nav-toggle-btn");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  this.classList.toggle("show");
});
