const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onSize);

function onSize(evt) {
    textEl.style.fontSize = `${evt.target.value}px`;    
}