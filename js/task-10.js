const controlsEl = document.querySelector('#controls');
let inputEl = controlsEl.children[0];
const buttonCreate = controlsEl.children[1];
const buttonDestr = controlsEl.children[2];
const boxesEl = document.querySelector('#boxes');


buttonCreate.addEventListener('click', (evt) => {
  let amount = inputEl.value;
  clickCreate(amount);
})

function clickCreate(amount) {
  const res = [];
  console.log(amount);
  for (let i = 0; i < Number(amount); i += 1){
    res.push(`<div style="background-color: ${getRandomHexColor()}; width:${30+i*10}px; height:${30+i*10}px"> </div>`);  
  }
  boxesEl.insertAdjacentHTML("beforeend", res.join(''))
}

buttonDestr.addEventListener('click', clickDestr);
function clickDestr() {
  [...boxesEl.children].forEach(child=>child.remove())
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
