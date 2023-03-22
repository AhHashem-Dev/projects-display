import select from "./utils/utils.js";

const data = select("#date");

data.textContent = new Date().getFullYear();
