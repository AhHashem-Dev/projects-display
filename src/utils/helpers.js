export const formatPrice = (number) => {
  const price = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return price;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((product) => {
    return product[type];
  });
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
