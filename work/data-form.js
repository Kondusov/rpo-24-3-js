let user_form = document.querySelector('form');
let result = document.getElementById('result');
function mainFunc(event){
    event.preventDefault();
    let user_name = document.getElementById('user_name').value;
    let user_age = document.getElementById('user_age').value;
    console.log(user_name, user_age);
    result.textContent = user_name+user_age;
}
user_form.addEventListener('submit', mainFunc);