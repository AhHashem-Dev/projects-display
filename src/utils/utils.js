const select = (selection) => {
  let elements = document.querySelectorAll(selection);
  if (elements.length < 1) {
    throw new Error(`No such element. Chech selection: ${selection}`);
  } else if (elements.length == 1) {
    elements = elements[0];
  }
  return elements;
};

export default select;
