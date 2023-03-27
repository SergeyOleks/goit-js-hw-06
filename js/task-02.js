const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");

const elements = ingredients.map(element => `<li class=${element}>${element}</li>`).join('');

ulEl.insertAdjacentHTML("beforeend", elements);
