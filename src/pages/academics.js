import programsData from "../data/programs.json" assert { type: "json" };

import select from "../utils/utils.js";

// navbar

const navMenu = select(".nav-links-menu");
const navBtn = select(".nav-toggle-btn");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  this.classList.toggle("show");
});

// programs

const programs = select(".academics-hero-programs");

class Program {
  constructor(program) {
    const {
      name,
      id,
      fields: {
        degree,
        icon,
        desc,
        statistics: { students, faculty },
        image,
      },
    } = program;
    this.id = id;
    this.name = name;
    this.degree = degree;
    this.icon = icon;
    this.desc = desc;
    this.students = students;
    this.faculty = faculty;
    this.image = image;
  }
}

let programsObj = [];

const init = () => {
  programsData.forEach((program) => {
    programsObj.push(new Program(program));
  });
  programs.innerHTML = [...programsObj]
    .map(({ id, name, degree, icon, desc, students, faculty, image }) => {
      return `
    <article class="academics-hero-program" data-id="${id}">
            <div class="academics-hero-program-header">
              <h5><i class="${icon}"></i>${name}</h5>
              <h6>${degree}</h6>
            </div>
            <div class="academics-hero-program-content">
              <p>
                ${desc}. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam quod repellendus itaque doloremque laborum assumenda repellat dolor amet dolore.
              </p>
              <div class="academics-hero-program-img">
                <img src="${image}" alt="program name" />
              </div>
            </div>
            <div class="academics-hero-program-footer">
              <div class="academics-hero-program-stats">
                <div>students: ${students}</div>
                <div>faculty: ${faculty}</div>
              </div>
              <a href="./program.html?programId=${id}">
                <button class="btn learn-more-btn">
                  learn more
                </button>
              </a>
            </div>
          </article>
    `;
    })
    .join("");
};

init();

// date

const data = select("#date");

data.textContent = new Date().getFullYear();
