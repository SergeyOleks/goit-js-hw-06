const bodyEl = document.body;
const spanEl = document.querySelector('.color');

bodyEl.addEventListener('click', onClick);


function onClick() {
  let color = getRandomHexColor();
  bodyEl.style.background = color;
  spanEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

