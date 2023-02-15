// your code here
var form = document.querySelector("form");
var h3 = document.querySelector("h3");
var nameElement = document.querySelector("#name");
var yearElement = document.querySelector("#year");
var buttonElement = document.querySelector("#button");

function handleSubmit(event){
	event.preventDefault();

	var h3Value = 'https://localhost:8080/';
	var name = nameElement.value;
	var year = yearElement.value;

	if(name && year){
		h3Value += `?name=` + name + `&year=` + year;
	}
	else if(!name && year){
		h3Value += `?year=` + year;
	}
	else if(name && !year)
	{
		h3Value += `?name=` + name;
	}
	h3.textContent = h3Value;
}
form.addEventListener('submit',handleSubmit);