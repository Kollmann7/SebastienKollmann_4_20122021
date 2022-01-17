function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements validate,commit,close
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelectorAll(".close");
const btnValidate = document.getElementById("validation-form");
const modalValidate = document.getElementById("thanks");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalclose.forEach((btn) => btn.addEventListener("click", closeModal));
//Validation form event
btnValidate.addEventListener('click', validate);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form function
function closeModal() {
  modalbg.style.display = "none";
}
function registerOpen(){
  modalValidate.style.display = "block";
}
//function modal register close
function registerClose(){
  modalValidate.style.display = "none";
}

//DOM Elements FORM
const form = document.getElementById("form");
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const birthDate = document.getElementById('birthdate');
const email = document.getElementById('email');
const quantityTournament = document.getElementById ('quantity');

//First name verification
function validateFirstName(){
  const firstNameForm = document.getElementById("first-name-form");
  if (firstName.value.trim() == ""){  
    firstNameForm.setAttribute("data-error", "Le champ doit être remplis");
    firstNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else if (firstName.value.trim().length < 2){
    firstNameForm.setAttribute("data-error", "Le champ doit avoir plus de deux caractères");
    firstNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    firstNameForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Last name verification
function validateLastName(){
  const lastNameForm = document.getElementById("last-name-form");
  if (lastName.value.trim() == ""){
    lastNameForm.setAttribute("data-error", "Le champ doit être remplis");
    lastNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else if (lastName.value.trim().length < 2){
    lastNameForm.setAttribute("data-error", "Le champ doit avoir plus de deux caractères");
    lastNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    lastNameForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Email verification
function validateEmail(){
  const emailForm = document.getElementById("email-form");
  if (email.value.trim() == ""){
    emailForm.setAttribute("data-error", "Le champ doit être remplis");
    emailForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    emailForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Birthday verification
function validateBirthDay(){
  const birthDateForm = document.getElementById("birthdate-form");
  if (birthDate.value == ""){
    birthDateForm.setAttribute("data-error", "Le champ doit être remplis");
    birthDateForm.setAttribute("data-error-visible","true");
  return false;
  }
  else{
    birthDateForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Tournament verification
function validateQuantityTournament(){
  const tournamentForm = document.getElementById("tournament-form");
  if (quantityTournament.value.trim()== ""){
    tournamentForm.setAttribute("data-error", "Le champ doit être remplis");
    tournamentForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    tournamentForm.setAttribute("data-error-visible","false");
    return true;
  }
}


function validate(e){
  e.preventDefault();
  const FirstNameValid = validateFirstName();
  const LastNameValid = validateLastName();
  const EmailValid = validateEmail();
  const BirthDayValid = validateBirthDay();
  const QuantityTournamentValid = validateQuantityTournament();
  console.log();


  if(FirstNameValid && LastNameValid && EmailValid && BirthDayValid && QuantityTournamentValid){
    modalSubmit();
  }
}

//Function modal submit
function modalSubmit(){
  closeModal();
  registerOpen();
}