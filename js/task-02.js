const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");

ingredients.forEach(ingredient=> {
  let objEl = document.createElement('li');
  objEl.textContent = ingredient;
  objEl.classList.add(ingredient);
  ulEl.append(objEl)
})




