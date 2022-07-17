const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");

const USERNAME = "username";
const HIDDEN = "hidden";

function userLogin(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME,username);
    loginGreeting(username);
}

function loginGreeting(username){
    greeting.innerText = `${username}, 오늘은 어디로 떠나고 싶은가요?`;
    greeting.classList.remove(HIDDEN);
    todoForm.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", userLogin);
}else{
    loginGreeting(savedUsername);
}

