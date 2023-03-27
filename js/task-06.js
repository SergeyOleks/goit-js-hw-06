const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInput);


function onInput(evt) {
    inputEl.classList.remove('invalid', 'valid');
    if (evt.currentTarget.value.length === Number(inputEl.dataset.length)) {

        inputEl.classList.add('valid');
        return
    } 
        
    inputEl.classList.add('invalid')
     
}