import select from "../utils/utils.js";

// navbar

const navMenu = select(".nav-links-menu");
const navBtn = select(".nav-toggle-btn");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  this.classList.toggle("show");
});

// program

import programsData from "../data/programs.json" assert { type: "json" };

const init = () => {
  const programDOM = select(".program-hero-center");
  const title = select(".title-center h3");

  const params = new URLSearchParams(location.search);

  const programId = params.get("programId");

  if (!programId) {
    location.replace("./academics.html");
  }

  const {
    name,
    fields: {
      degree,
      desc,
      image,
      statistics: { students, faculty },
    },
  } = programsData.find((program) => {
    return program.id == programId;
  });

  title.textContent = `${title.textContent} ${name}`;

  programDOM.innerHTML = `<div class="program-hero-title">
          <h2>${name}</h2>
          <h4>${degree}</h4>
        </div>
        <div class="program-hero-content">
          <p class="program-hero-desc">
          ${desc}.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam
            dicta ullam at atque. Animi, doloribus? Quibusdam illum saepe quod,
            beatae a iste dolore? Consectetur, molestias commodi animi nulla
            sunt velit repellat, eaque nam, inventore ea possimus. Repudiandae,
            quam ipsam molestias unde magnam laudantium libero eos esse velit ab
            quis distinctio fuga. Debitis suscipit modi non sapiente ea
            veritatis aut.
          </p>
          <div class="program-hero-img">
            <img src="${image}" alt="program" />
          </div>
          <div class="program-hero-line-1"></div>
          <div class="program-hero-stats">
            <span>students: ${students}</span>
            <span>faculty: ${faculty}</span>
          </div>
          <div class="program-hero-line-2"></div>
        </div>
        <footer class="program-hero-footer">
          <button class="application-status-btn btn">
            applications closed
          </button>
          <a href="./academics.html">
            <button class="back-btn btn">
                back to all programs
            </button></a>
        </footer>`;

  const descDims = select(".program-hero-desc").getBoundingClientRect();
  const imgContainer = select(".program-hero-img img");

  imgContainer.style.height = `${descDims.bottom - descDims.top}px`;
  imgContainer.style.width = null;
};

init();

// date

const data = select("#date");

data.textContent = new Date().getFullYear();
