
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {

    evt.preventDefault();    
    
    const { email, password } = evt.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені')
    }

    console.log(`Email: ${email.value}\nPassword: ${password.value}`)
    
    evt.currentTarget.reset();  
}

 