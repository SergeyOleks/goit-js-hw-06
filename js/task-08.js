
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {

    evt.preventDefault();    
    
    const {
        elements: { email, password } } = evt.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені')
        return
    }
   
    const data = {
    email : email.value,
    password: password.value
  }
    console.dir(data)

    evt.currentTarget.reset();  
}

 