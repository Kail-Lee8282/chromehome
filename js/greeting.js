const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form #input-user-name");
const logoutInput = document.getElementById("btn-logout");
const greetingContain= document.querySelector(".greetingContainer");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function paintGreeting(userName) {
  greeting.innerText = `Cheers today too, ${userName}`;
  console.log(greetingContain);
  greetingContain.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginFormSubmit(event) {
  event.preventDefault();

  const userName = loginInput.value;
  console.log(userName);
  localStorage.setItem(USERNAME_KEY, userName);

  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  paintGreeting(userName);

  loginInput.value="";
}

function onLogoutClick(event){
  console.log(event.target.value);
  localStorage.removeItem(USERNAME_KEY);
  greetingContain.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreeting(savedUserName);
}

loginForm.addEventListener("submit", onLoginFormSubmit);
logoutInput.addEventListener("click",onLogoutClick);
