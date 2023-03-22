import programsData from "./data/programs.json" assert { type: "json" };

import select from "./utils/utils.js";

const programsDOM = select(".featured-programs");

programsDOM.innerHTML = programsData
  .filter((program) => {
    return program.fields.featured;
  })
  .map(({ name, id, fields: { icon } }) => {
    return `<article class="featured-program" data-id="${id}">
              <i class="${icon}"></i>
              <h5>${name}</h5>
            </article>`;
  })
  .join("");

const programDOM = select(".featured-program");
const display = select(".featured-display");

const init = () => {
  programDOM[0].classList.add("active");
  const {
    name,
    fields: {
      desc,
      image,
      statistics: { students, faculty },
    },
  } = programsData[0];
  display.innerHTML = `
            <div class="featured-display-title">
              ${name}
            </div>
            <div class="featured-display-content">
              <div class="featured-display-text">
                <p>
                  ${desc}
                </p>
                <div class="featured-display-stats">
                  <article class="featured-display-stat">
                    students: <span class="featured-number-of-students">${students}</span>
                  </article>
                  <article class="featured-display-stat">
                    faculty: <span class="featured-number-of-faculty">${faculty}</span>
                  </article>
                </div>
              </div>
              <div class="featured-display-img">
                <img src="${image}" alt="display" />
              </div>
            </div>`;
};

[...programDOM].forEach((program) => {
  program.addEventListener("click", function () {
    [...programDOM].forEach((program) => {
      program.classList.remove("active");
    });
    changeDisplay(this);
  });
});

const changeDisplay = (element) => {
  element.classList.add("active");
  const {
    name,
    fields: {
      desc,
      image,
      statistics: { students, faculty },
    },
  } = programsData.find((program) => {
    return program.id == element.dataset.id;
  });
  display.innerHTML = `
            <div class="featured-display-title">
              ${name}
            </div>
            <div class="featured-display-content">
              <div class="featured-display-text">
                <p>
                  ${desc}
                </p>
                <div class="featured-display-stats">
                  <article class="featured-display-stat">
                    students: <span class="featured-number-of-students">${students}</span>
                  </article>
                  <article class="featured-display-stat">
                    faculty: <span class="featured-number-of-faculty">${faculty}</span>
                  </article>
                </div>
              </div>
              <div class="featured-display-img">
                <img src="${image}" alt="display" />
              </div>
            </div>`;
};

init();
