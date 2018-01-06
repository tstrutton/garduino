//self executing anonymous function
(function() {
	"use strict";
console.log("SEAF has fired");	


function plantinfo(height) {
	var plantbutton = document.querySelector("#plantbutton")
	var plantmessage = "This is plant 1";

	function plantmessage() {
		alert(plantmessage)
	}

	plantbutton.addEventListener("click", plantmessage, false);
	}

	plantinfo();


})();