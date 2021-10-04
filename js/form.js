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

//CONTROL FIRSTNAME
function controlFirstname() {

	const firstname = document.getElementById("user-firstname");
	const regexName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
	const testFirstname = regexName.test(firstname.value);
			
	if (firstname.value === "") {
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
	else if (testFirstname === false){
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

	const lastname = document.getElementById("user-lastname");
	const regexName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
	const testLastname = regexName.test(lastname.value);

	if (lastname.value === "") {
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
	else if (testLastname === false){
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
}

//CONTROL EMAIL
function controlEmail () {

	const email = document.querySelector("#user-email");
	const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const testEmail = regexEmail.test(email.value);
	
	if (email.value === "") {
			infoEmail.textContent = "E-mail requis";
			infoEmail.style.color = "red";
			infoEmail.previousElementSibling.style.border = "solid red 0.19rem";
			
		return false;

	} 
	else if (testEmail === false){
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
}

//CONTROL BIRTHDATE
function controlBirthdate () {

	const birthdate = document.querySelector("#user-birthdate");

	if (birthdate.value === "") {
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
}

//CONTROL TOURNAMENT
function controlNbrTournament () {

	if (nbrTournament.value === "") {
			infoNbrTournament.textContent = "Nombre de participations requise";
			infoNbrTournament.style.color = "red";
			infoNbrTournament.previousElementSibling.style.border = "solid red 0.19rem";
	
		return false;
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