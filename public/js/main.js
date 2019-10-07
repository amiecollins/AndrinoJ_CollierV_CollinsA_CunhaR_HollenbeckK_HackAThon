(function(){

console.log("SEAF Fired");

const button = document.querySelector("#button");
var burgerCon = document.querySelector("#burgerCon");

function hamburger() {
	console.log("Clicked Worked");
	burgerCon.classList.toggle("slideToggle");
	button.classList.toggle("expanded");
}

button.addEventListener("click", hamburger);

})();