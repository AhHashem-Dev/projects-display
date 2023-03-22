import select from "../utils/utils.js";

// navbar

const navMenu = select(".nav-links-menu");
const navBtn = select(".nav-toggle-btn");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  this.classList.toggle("show");
});

// questions

const questions = select(".about-hero-question");

[...questions].forEach((question) => {
  const btns = question.querySelectorAll(".btn");
  [...btns].forEach((btn) => {
    btn.addEventListener("click", () => {
      if (
        btn.classList.contains("increase-btn") &&
        !question.classList.contains("active")
      ) {
        question.classList.add("active");
        scrollBy({
          top: 50,
          left: 0,
          behavior: "smooth",
        });
      }

      if (btn.classList.contains("decrease-btn")) {
        question.classList.remove("active");
        scrollBy({
          top: -50,
          left: 0,
          behavior: "smooth",
        });
      }
    });
  });
});

// date

const data = select("#date");

data.textContent = new Date().getFullYear();
