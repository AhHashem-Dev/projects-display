import select from "./utils/utils.js";

const cards = select(".counter-card");
const featured = select(".featured");

const listenerFunction = () => {
  if (screenY > featured.getBoundingClientRect().top) {
    init();
    removeEventListener("scroll", listenerFunction);
  }
};

addEventListener("scroll", listenerFunction);

const init = () => {
  [...cards].forEach((card) => {
    const counter = card.querySelector(".counter-card-count");
    counter.textContent = 0;
    const max = parseInt(counter.dataset.count);
    const step = Math.ceil(max / 75);
    const id = setInterval(() => {
      counter.textContent = parseInt(counter.textContent) + step;
      if (counter.textContent > max) {
        clearInterval(id);
        counter.textContent = `${max}+`;
      }
    }, 40);
  });
};
