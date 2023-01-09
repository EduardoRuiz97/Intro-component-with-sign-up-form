
let parentElement = document.querySelector(".form__container");
let userNameInput = document.querySelector("#nameForm[type='text']");
let userLastNameInput = document.querySelector("#lasNameForm[type='text']");
let userEmail = document.querySelector("#emailForm[type='email']");
let userPassword = document.querySelector("#passwordForm[type='password']");

parentElement.addEventListener("click", (event)=>{

  if(event.srcElement.nodeName === "BUTTON") {
    event.preventDefault();
    verifyName();
    verifyLastName();
    verifyEmail();
    verifyPassword();

    userNameInput.value = ""; 
    userLastNameInput.value = "";
    userEmail.value = "";
    userPassword.value = "";
  }
})



let verifyName = () => {
  let userNameInput = document.querySelector("#nameForm[type='text']");
  let container = userNameInput.parentElement;
  let warningText = container.nextElementSibling;
  let errorIcon = document.querySelector(".error__icon");

  
  if(userNameInput.value === "") {

    errorIcon.classList.add("error__show");
    warningText.classList.add("warning__text__red__off");
    container.classList.add("wrong__item");

  } else {
    errorIcon.classList.remove("error__show");
    warningText.classList.remove("warning__text__red__off");
    container.classList.remove("wrong__item");
  }
}

let verifyLastName = () => {
  let userLastNameInput = document.querySelector("#lasNameForm[type='text']");
  let container = userLastNameInput.parentElement;
  let warningText = container.nextElementSibling;
  let errorIcon = userLastNameInput.nextElementSibling;
  
  
  if(userLastNameInput.value === "") {

    errorIcon.classList.add("error__show");
    warningText.classList.add("warning__text__red__off");
    container.classList.add("wrong__item");

  } else {
    errorIcon.classList.remove("error__show");
    warningText.classList.remove("warning__text__red__off");
    container.classList.remove("wrong__item");
  }
}

let verifyEmail = () => {
  let userEmail = document.querySelector("#emailForm[type='email']");
  let container = userEmail.parentElement;
  let warningText = container.nextElementSibling;
  let errorIcon = userEmail.nextElementSibling;
  let regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  


  if(regexp.test(userEmail.value) == false) {

    errorIcon.classList.add("error__show");
    warningText.classList.add("warning__text__red__off");
    container.classList.add("wrong__item");

  } else {
    errorIcon.classList.remove("error__show");
    warningText.classList.remove("warning__text__red__off");
    container.classList.remove("wrong__item");
  }
}

let verifyPassword = () => {
  let userPassword = document.querySelector("#passwordForm[type='password']");
  let container = userPassword.parentElement;
  let warningText = container.nextElementSibling;
  let errorIcon = userPassword.nextElementSibling;

  if(userPassword.value === "") {

    errorIcon.classList.add("error__show");
    warningText.classList.add("warning__text__red__off");
    container.classList.add("wrong__item");

  } else {
    errorIcon.classList.remove("error__show");
    warningText.classList.remove("warning__text__red__off");
    container.classList.remove("wrong__item");
  }
}
