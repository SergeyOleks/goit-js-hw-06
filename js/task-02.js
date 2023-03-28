const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {  
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add(element);
  return li;
})

ulEl.append(...elements);


