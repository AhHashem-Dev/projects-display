import activitiesData from "../data/activities.json" assert { type: "json" };

import select from "../utils/utils.js";

// navbar

const navMenu = select(".nav-links-menu");
const navBtn = select(".nav-toggle-btn");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  this.classList.toggle("show");
});

// featured

const featuredContainer = select(".campus-hero-featured");

const featuredActivities = activitiesData.filter((activity) => {
  return activity.featured;
});

featuredContainer.innerHTML = featuredActivities
  .map(({ name, location, img }) => {
    return `<article class="campus-hero-activity">
            <div class="campus-hero-activity-img-container">
              <img
                src="${img}"
                alt="${name}"
                class="campus-hero-activity-img"
              />
              <div class="campus-hero-activity-overlay">${location}</div>
            </div>
            <h4 class="campus-hero-activity-title">${name}</h4>
          </article>`;
  })
  .join("");

// filters

const filteredActivitiesContainer = select(".campus-filters-activities");
const btnsContaine = select(".campus-filters-filters-container-btns");
const form = select(".campus-filters-form");
const input = select(".campus-input");

let filteredActivities = [...activitiesData];

btnsContaine.innerHTML = [
  "all",
  ...new Set(
    filteredActivities.map((activity) => {
      return activity.location;
    }, [])
  ),
]
  .map((location) => {
    return `<button class="btn filters-btn" data-name="${location}">${location}</button>`;
  })
  .join("");

const displayFiltered = (activities) => {
  filteredActivitiesContainer.innerHTML = activities
    .map(({ name, img }) => {
      return `<article class="campus-filters-activity">
            <div class="campus-filters-activity-img-container">
              <img
                src="${img}"
                alt="${name}"
                class="campus-filters-activity-img"
              />
            </div>
            <h4 class="campus-filters-activity-title">${name}</h4>
          </article>`;
    })
    .join("");
};

displayFiltered(filteredActivities);

select(".filters-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const location = event.currentTarget.dataset.name;
    filteredActivities = [...activitiesData].filter((activity) => {
      if (location == "all") {
        return true;
      }
      return activity.location == location;
    });
    displayFiltered(filteredActivities);
  });
});

form.addEventListener("keyup", () => {
  const value = input.value.toLowerCase();
  if (!value) {
    filteredActivities = [...activitiesData];
  } else {
    filteredActivities = [...activitiesData].filter((activity) => {
      return activity.name.includes(value);
    });
  }
  displayFiltered(filteredActivities);
});

// date

const data = select("#date");

data.textContent = new Date().getFullYear();
