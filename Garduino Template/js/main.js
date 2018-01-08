//self executing anonymous function
(function() {
	"use strict";
	console.log("SEAF has fired");

	var plants = document.querySelectorAll(".plants");
	var waterAdd = document.querySelectorAll(".add");

	for (var i = 0; i < plants.length; i++) {
			plants[i].addEventListener("click", changeOption, false);
		}	

	for (var i = 0; i < waterAdd.length; i++) {
		waterAdd[i].addEventListener("click", timer, false);
	}	

	function timer(e) {
		var div = document.createElement("div"); 
		var divtest = document.querySelector(".addTime");

		if(divtest) {
			console.log("nothing");
		}else{
			e.path[2].appendChild(div).classList.add("addTime");
		}
	}

	function changeOption(e) {	
		var selectedPlant = document.querySelector("[selected=selected]");

		if(selectedPlant) {
			//console.log('Making another selection.');

			for (var p = 0; p < plants.length; p++){
				plants[p].classList.remove("plantClick"); //Loop through and remove any existing visual indicators
				plants[p].removeAttribute("selected"); //Remove any existing selections
			}

			document.querySelector("#"+e.currentTarget.id+"Click").setAttribute("selected", "selected"); //Make a new selection
			document.querySelector("#"+e.currentTarget.id).classList.add("plantClick"); //Indicate the selection visually
		} else {
			//console.log('Making first selection.');

			document.querySelector("#"+e.currentTarget.id+"Click").setAttribute("selected", "selected");
			document.querySelector("#"+e.currentTarget.id).classList.add("plantClick");
		}
	}

}());
