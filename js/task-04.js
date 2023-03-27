const counterValue = document.querySelector('#value');
const counterBox = document.querySelector('#counter');
const buttonDecr = counterBox.children[0];
const buttonIncr = counterBox.children[2];
counterValue.textContent = 0;

buttonDecr.addEventListener('click', onClick);
buttonIncr.addEventListener('click', onClick);


function onClick(evt) {

    if (evt.target.textContent==='+1') {
        counterValue.textContent =Number(counterValue.textContent) + 1
    }
    
    else if (Number(counterValue.textContent) > 0) {
        counterValue.textContent = Number(counterValue.textContent)-1;
    } 
  
} 
