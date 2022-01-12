let btn_login = document.getElementById('btn-login');
let btn_signup = document.getElementById('btn-signup');

let login_container = document.querySelector('.login-container');
let signup_container = document.querySelector('.signup-container');

btn_login.addEventListener("click", ()=> {
    btn_login.classList.add('clicked');
    btn_signup.classList.remove('clicked');
    login_container.classList.add('active');
    signup_container.classList.remove('active');
});

btn_signup.addEventListener("click", ()=> {
    btn_login.classList.remove('clicked');
    btn_signup.classList.add('clicked');
    login_container.classList.remove('active');
    signup_container.classList.add('active');
});