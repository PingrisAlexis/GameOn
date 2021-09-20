// DOM elements
let BtnSubmitValidForm = document.getElementById("btn-form-submit");
BtnSubmitValidForm.addEventListener('click', validation);

let nbrTournament = document.querySelector("#user-nbr-tournament");

let citiesCheckboxContainer = document.querySelector("#checkbox-cities");
let citiesCheckboxBtns = document.querySelectorAll("input[type=checkbox][name=location]");
let arrayCitiesCheckbox = [];
citiesCheckboxContainer.style.display = "none";

let validTermsOfUse = document.getElementById("terms-of-use");
let validNewsletter = document.getElementById("newsletter");

let infoFirstname = document.getElementById("info-firstname");
let infoLastname = document.getElementById("info-lastname");
let infoEmail = document.getElementById("info-email");
let infoBirthdate = document.getElementById("info-birthdate");
let infoNbrTournament = document.getElementById("info-nbr-tournament");

//CONTROL FIRSTNAME
function controlFirstname() {
	let firstname = document.getElementById("user-firstname");
	let regexName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
	let testFirstname = regexName.test(firstname.value);
			
	if (firstname.value == "") {
			infoFirstname.textContent = "Prénom requis";
			infoFirstname.style.color = "red";
			infoFirstname.previousElementSibling.style.border = "solid red 0.19rem";
		return false;
			
	} 
	else if (firstname.value.trim().length < 2) {
		infoFirstname.textContent = "Le prénom doit avoir au moins deux caractéres";
		infoFirstname.style.color = "red";
		infoFirstname.previousElementSibling.style.border = "solid red 0.19rem";
		return false;
		
	} 
	else if (testFirstname == false){
			infoFirstname.textContent = "Format incorrect";
			infoFirstname.style.color = "red";
			infoFirstname.previousElementSibling.style.border = "solid red 0.19rem";
		return false ;
		
	} 
	else {
			infoFirstname.textContent = "Prénom validé";
			infoFirstname.style.color = "green";
			infoFirstname.previousElementSibling.style.border = "solid green 0.19rem";
		
		return firstname.value;
	}
};

//CONTROL LASTNAME
function controlLastname() {
	let lastname = document.getElementById("user-lastname");
	let regexName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
	let testLastname = regexName.test(lastname.value);

	if (lastname.value == "") {
			infoLastname.textContent = "Nom requis";
			infoLastname.style.color = "red";
			infoLastname.previousElementSibling.style.border = "solid red 0.19rem";
			
		return false;
	
	} 
	else if (lastname.value.trim().length < 2) {
			infoLastname.textContent = "Le nom doit avoir au moins deux caractéres";
			infoLastname.style.color = "red";
			infoLastname.previousElementSibling.style.border = "solid red 0.19rem";
		
		return false;
		
	} 
	else if (testLastname == false){
			infoLastname.textContent = "Format incorrect";
			infoLastname.style.color = "red";
			infoLastname.previousElementSibling.style.border = "solid red 0.19rem";
			
		return false;
	
	} 
	else {
			infoLastname.textContent = "Nom validé";
			infoLastname.style.color = "green";
			infoLastname.previousElementSibling.style.border = "solid green 0.19rem";
			
		return lastname.value;
	}
};

//CONTROL EMAIL
function controlEmail () {
	let email = document.querySelector("#user-email");
	let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let testEmail = regexEmail.test(email.value);
	
	if (email.value == "") {
			infoEmail.textContent = "E-mail requis";
			infoEmail.style.color = "red";
			infoEmail.previousElementSibling.style.border = "solid red 0.19rem";
			
		return false;

	} 
	else if (testEmail == false){
			infoEmail.textContent = "Format incorrect";
			infoEmail.style.color = "red";
			infoEmail.previousElementSibling.style.border = "solid red 0.19rem";
			
		return false;

	} 
	else {
			infoEmail.textContent = "E-mail validé";
			infoEmail.style.color = "green";
			infoEmail.previousElementSibling.style.border = 'solid green 0.19rem';
			
		return email.value;
	}
};

//CONTROL BIRTHDATE
function controlBirthdate () {
	let birthdate = document.querySelector("#user-birthdate");

	if (birthdate.value == "") {
			infoBirthdate.textContent = "Date de naissance requise";
			infoBirthdate.style.color = "red";
			infoBirthdate.previousElementSibling.style.border = "solid red 0.19rem";
			
		return false;
	} 
	else if (birthdate.value.trim().length <10){
			infoBirthdate.textContent = "Format incorrect";
			infoBirthdate.style.color = "red";
			infoBirthdate.previousElementSibling.style.border = "solid red 0.19rem";
			
		return false;
	}
	
	else {
			infoBirthdate.textContent = "Date de naissance validé";
			infoBirthdate.style.color = "green";
			infoBirthdate.previousElementSibling.style.border = "solid green 0.19rem";
			
		return birthdate.value;
	}
};

//CONTROL TOURNAMENT
function controlNbrTournament () {
	let regexNbrTournament = /^[0-9][0-9]?$/;
	let testNbrTournament = regexNbrTournament.test(nbrTournament.value);
	
	if (nbrTournament.value == "") {
			infoNbrTournament.textContent = "Nombre de participations requise";
			infoNbrTournament.style.color = "red";
			infoNbrTournament.previousElementSibling.style.border = "solid red 0.19rem";
	
		return false;
	} 
	else if (testNbrTournament == false){
			infoNbrTournament.textContent = "Format incorrect: 99 participations au maximum";
			infoNbrTournament.style.color = "red";
			infoNbrTournament.previousElementSibling.style.border = "solid red 0.19rem";
		
		return false;
	}
	else {
			infoNbrTournament.textContent = "Nombre de participations validé";
			infoNbrTournament.style.color = "green";
			infoNbrTournament.previousElementSibling.style.border = "solid green 0.19rem";
			
			citiesCheckboxContainer.style.display = "block";
			
		return nbrTournament.value;
	}
};

//LISTENNING ON TOURNAMENT QUANTITY TO DISPLAY CITIES CHECKBOXES
nbrTournament.addEventListener('input', function () {
	
	if (nbrTournament.value > 0 && nbrTournament.value <= 99) {
		citiesCheckboxContainer.style.display = "block";
		
	}
	else {
		citiesCheckboxContainer.style.display = "none";
	}
});


//LISTENNING ON CITIES CHECKBOXES VALUES
citiesCheckboxBtns.forEach(function(checkbox) {
	
  checkbox.addEventListener('change', function() {
		
    arrayCitiesCheckbox = 
      Array.from(citiesCheckboxBtns) // Convert checkboxes to an array to use filter and map methods.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
			
		return arrayCitiesCheckbox;
  })
});

//LISTENNING ON TERMS OF USE CHECKBOX
validTermsOfUse.addEventListener('change', function() {
	
	let infoTermsOfUse = document.getElementById("info-terms-of-use");
	
  if (this.checked) {
		
		infoTermsOfUse.style.display = "none";

	return validTermsOfUse.checked;
		
  } else {
		
		infoTermsOfUse.style.display = "block"
		infoTermsOfUse.textContent = "Vous devez accepter les conditions générales d'utilisation";
		infoTermsOfUse.style.color = "red";
		
	return false;
  }
});

//LISTENNING ON NEWSLETTER CHECKBOX
validNewsletter.addEventListener('change', function() {
	
  if (this.checked) {

	return validNewsletter.checked;
		
  } else {
		
	return false
	}
});

//SUBMIT FORM
function validation(event){
	event.preventDefault();
	
	let validFirstname = controlFirstname();
	let validLastname = controlLastname();	
	let validEmail = controlEmail();
	let validBirthdate = controlBirthdate();
	let validNbrTournament = controlNbrTournament();


	if (validFirstname && validLastname && validEmail && validBirthdate && validNbrTournament && validTermsOfUse.checked != false) {
		
		displayConfirmationModal();
	} 
	else {
		
		return false;
	}
};