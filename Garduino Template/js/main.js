//self executing anonymous function
(function() {
	"use strict";
	console.log("SEAF has fired");

	var plants = document.querySelectorAll(".plants");
	var waterAdd = document.querySelectorAll(".add");
	var dogs = document.querySelectorAll(".dog");
	var option = document.querySelector("#mySelect");

	for (var i = 0; i < plants.length; i++) {
			plants[i].addEventListener("click", changeOption, false);
		}	

	for (var i = 0; i < waterAdd.length; i++) {
		waterAdd[i].addEventListener("click", timer, false);
	}	

	option.addEventListener("change", changeTop, false);

	function timer(e) {
		var div = document.createElement("div"); 
		var divtest = document.querySelector(".addTime");

		if(divtest) {
			console.log("nothing");
		}else{
			e.path[3].appendChild(div).classList.add("addTime");
			document.querySelector(".addTime").innerHTML = "<p class='numSet'>00</p><p class='numSet'>00</p><p id='amSet'>am</p>"
		}
	}

	function changeOption(e) {	
		var selectedPlant = document.querySelector("[selected=selected]");

		if(selectedPlant) {
			//console.log('Making another selection.');

			for (var p = 0; p < plants.length; p++){
				plants[p].classList.remove("plantClick"); //Loop through and remove any existing visual indicators
			}

			for (var d = 0; d < dogs.length; d++){
				dogs[d].removeAttribute("selected"); //Remove any existing selections
			}

			document.querySelector("#"+e.currentTarget.id+"Click").setAttribute("selected", "selected"); //Make a new selection
			document.querySelector("#"+e.currentTarget.id).classList.add("plantClick"); //Indicate the selection visually
		} else {
			//console.log('Making first selection.');

			document.querySelector("#"+e.currentTarget.id+"Click").setAttribute("selected", "selected");
			document.querySelector("#"+e.currentTarget.id).classList.add("plantClick");
		}
	}

	function changeTop(e) {
		var change = document.querySelector("#"+e.currentTarget.value);

			for (var p = 0; p < plants.length; p++){
				plants[p].classList.remove("plantClick"); //Loop through and remove any existing visual indicators
			}
			
		change.classList.add("plantClick");
	}
}());
