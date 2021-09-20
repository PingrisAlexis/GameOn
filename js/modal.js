//NAVBAR
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//SIGNUP 
const signupModal = document.querySelector(".bground");
const BtnLaunchSignupModal = document.querySelectorAll(".modal-btn");
const BtnCloseSignupModal = document.querySelectorAll(".close");

//CONFIRMATION FORM
const confirmationModal = document.getElementsByClassName("container-confirmation");
const BtnCloseConfirmationModal = document.getElementById("confirmation-close-btn");

//LAUNCH SIGNUP MODAL
BtnLaunchSignupModal.forEach((btn) => btn.addEventListener("click", launchSignupModal));
function launchSignupModal() {
  signupModal.style.display = "block";
}

//CLOSE SIGNUP MODAL
BtnCloseSignupModal.forEach((btn) => btn.addEventListener("click", closeSignupModal));
function closeSignupModal() {
  signupModal.style.display = document.querySelector(".select-hide");
}

//DISPLAY CONFIRMATION MODAL. CALL FROM FROM.JS VALIDATION()
function displayConfirmationModal() {
  signupModal.style.display = "none";
  confirmationModal[0].style.display = "flex";
}

//CLOSE CONFIRMATION MODAL, AND RESET THE FORM
BtnCloseConfirmationModal.addEventListener('click', resetSignupModal);

function resetSignupModal() {
  document.querySelector("form").reset();
  
  confirmationModal[0].style.display = "none";
  
  infoFirstname.previousElementSibling.style.border = "none";
  infoFirstname.textContent = "";
  
  infoLastname.previousElementSibling.style.border = "none";
  infoLastname.textContent = "";
  
  infoEmail.previousElementSibling.style.border = "none";
  infoEmail.textContent = "";
  
  infoBirthdate.previousElementSibling.style.border = "none";
  infoBirthdate.textContent = "";
  
  infoNbrTournament.previousElementSibling.style.border = "none";
  infoNbrTournament.textContent = "";
  
  citiesCheckboxContainer.style.display = "none";
}
