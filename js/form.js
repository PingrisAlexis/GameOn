// DOM elements
const BtnSubmitValidForm = document.getElementById("btn-form-submit");
BtnSubmitValidForm.addEventListener('click', validation);

const nbrTournament = document.querySelector("#user-nbr-tournament");

const citiesCheckboxContainer = document.querySelector("#checkbox-cities");
const citiesCheckboxBtns = document.querySelectorAll("input[type=checkbox][name=location]");
let arrayCitiesCheckbox = [];
citiesCheckboxContainer.style.display = "none";
const validTermsOfUse = document.getElementById("terms-of-use");
const validNewsletter = document.getElementById("newsletter");

const infoFirstname = document.getElementById("info-firstname");
const infoLastname = document.getElementById("info-lastname");
const infoEmail = document.getElementById("info-email");
const infoBirthdate = document.getElementById("info-birthdate");
const infoNbrTournament = document.getElementById("info-nbr-tournament");
const infoCitiesCheckboxes = document.getElementById("info-checkbox");

const regexName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

//INVALID INPUT
function invalidControl(selector, errorMessage) {
	selector.textContent = errorMessage;
	selector.style.color = "red";
	selector.previousElementSibling.style.border = "solid red 0.19rem";

	return false;
}

//VALID INPUT
function validControl(selector, message) {
	selector.textContent = message;
	selector.style.color = "green";
	selector.previousElementSibling.style.border = "solid green 0.19rem";

	return selector.previousElementSibling.value;
}
//CONTROL FIRSTNAME
function controlFirstname() {

	const firstname = document.getElementById("user-firstname");
	const testFirstname = regexName.test(firstname.value);

	if (firstname.value === "") {

		return invalidControl(infoFirstname, "Prénom requis");

	} 
	else if (firstname.value.trim().length < 2) {

		return invalidControl(infoFirstname, "Le prénom doit avoir au moins deux caractéres");

	} 
	else if (testFirstname === false){

		return invalidControl(infoFirstname, "Format incorrect");

	} 
	else {

		return validControl(infoFirstname, "Prénom validé");

	}
}

//CONTROL LASTNAME
function controlLastname() {

	const lastname = document.getElementById("user-lastname");
	const testLastname = regexName.test(lastname.value);

	if (lastname.value === "") {

		return invalidControl(infoLastname, "Nom requis");

	} 
	else if (lastname.value.trim().length < 2) {

		return invalidControl(infoLastname, "Le nom doit avoir au moins deux caractéres");

	} 
	else if (testLastname === false){

		return invalidControl(infoLastname, "Format incorrect");

	} 
	else {

		return validControl(infoLastname, "Nom validé");

	}
}

//CONTROL EMAIL
function controlEmail () {

	const email = document.querySelector("#user-email");
	const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const testEmail = regexEmail.test(email.value);
	
	if (email.value === "") {

		return invalidControl(infoEmail, "E-mail requis");

	} 
	else if (testEmail === false){

		return invalidControl(infoEmail, "Format incorrect");

	} 
	else {

		return validControl(infoEmail, "E-mail validé");

	}
}

//CONTROL BIRTHDATE
function controlBirthdate () {

	const birthdate = document.querySelector("#user-birthdate");

	if (birthdate.value === "") {

		return invalidControl(infoBirthdate, "Date de naissance requise");

	} 
	else if (birthdate.value.trim().length <10){

		return invalidControl(infoBirthdate, "Format incorrect");

	}
	else {

		return validControl(infoBirthdate, "Date de naissance validé");

	}
}

//CONTROL TOURNAMENT
function controlNbrTournament () {

	if (nbrTournament.value === "") {

		return invalidControl(infoNbrTournament, "Nombre de participations requise");

	} 
	else if (parseInt(nbrTournament.value) > 0 && arrayCitiesCheckbox.length <= 0){
			infoCitiesCheckboxes.textContent = "Veuillez renseigner au moins une ville";
			infoCitiesCheckboxes.style.color = "red";

		return false;
	}
	else {

			infoNbrTournament.textContent = "Nombre de participations validé";
			infoNbrTournament.style.color = "green";
			infoNbrTournament.previousElementSibling.style.border = "solid green 0.19rem";
			infoCitiesCheckboxes.textContent = "";
			
		return nbrTournament.value;
	}
}

//LISTENING ON TOURNAMENT QUANTITY TO DISPLAY CITIES CHECKBOXES
nbrTournament.addEventListener('input', function () {

	if (nbrTournament.value > 0) {
			citiesCheckboxContainer.style.display = "block";

	}
	else {
			citiesCheckboxContainer.style.display = "none";
	}
})

//LISTENING ON CITIES CHECKBOXES VALUES
citiesCheckboxBtns.forEach(function(checkbox) {

	checkbox.addEventListener('change', function() {
		
    	arrayCitiesCheckbox =
      		Array.from(citiesCheckboxBtns) // Convert checkboxes to an array to use filter and map methods.
				.filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
				.map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

		return arrayCitiesCheckbox;
  })
})

//LISTENING ON TERMS OF USE CHECKBOX
validTermsOfUse.addEventListener('change', function() {

	const infoTermsOfUse = document.getElementById("info-terms-of-use");
	
  if (this.checked) {
		
		infoTermsOfUse.style.display = "none";

	return validTermsOfUse.checked;
		
  } else {
		
		infoTermsOfUse.style.display = "block"
		infoTermsOfUse.textContent = "Vous devez accepter les conditions générales d'utilisation";
		infoTermsOfUse.style.color = "red";
		
	return false;
  }
})

//LISTENING ON NEWSLETTER CHECKBOX
validNewsletter.addEventListener('change', function() {
	
  if (this.checked) {

	return validNewsletter.checked;
		
  } else {
		
	return false
  }
})

//SUBMIT FORM
function validation(event){

	event.preventDefault();
	
	let validFirstname = controlFirstname();
	let validLastname = controlLastname();
	let validEmail = controlEmail();
	let validBirthdate = controlBirthdate();
	let validNbrTournament = controlNbrTournament();

	if (validFirstname && validLastname && validEmail && validBirthdate && validNbrTournament && validTermsOfUse.checked !== false) {

		let formData = new FormData();

		formData.append('firstname', validFirstname);
		formData.append('lastname', validLastname);
		formData.append('email', validEmail);
		formData.append('birthdate', validBirthdate);
		formData.append('nbrOfTournament', validNbrTournament);
		formData.append('citiesOfTournament', arrayCitiesCheckbox);
		formData.append('newsletter', validNewsletter.checked);

		for (let [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}

		displayConfirmationModal();
	}
}

