//self executing anonymous function
(function() {
	"use strict";
	console.log("SEAF has fired");

	// Basic Variables
	var waterAdd = document.querySelectorAll(".add");
	var option = document.querySelector("#mySelect");
	var adder = document.querySelector("#adder");
	var plants = document.querySelectorAll(".plants");
	var selectedPlant = document.querySelector("[selected=selected]")
	
	//Event Listeners
	option.addEventListener("change", changeTop, false);
	adder.addEventListener("click", addPlants, false);

	//Trigger
	var catter = true;

	function addPlants(e) {
		
		if(catter === true){

			//Create Elements Variables
			var theParent = document.querySelector("#new");
			var theKid = document.createElement("div");
			var the2Kid = document.createElement("div");
			var input = document.createElement("input");
			var input1 = document.createElement("submit");
			var select = document.createElement("select");
			var option1 = document.createElement("option");
			var option2 = document.createElement("option");
			var option3 = document.createElement("option");
			var option4 = document.createElement("option");

			//Add the new Div
			theParent.appendChild(theKid).classList.add("col-xs-6", "col-sm-4", "col-lg-2", "newer");
			theParent.insertBefore(theKid, theParent.firstChild);
			theKid.appendChild(the2Kid).classList.add("plants");
			the2Kid.appendChild(input).classList.add("formADD");

			//Append Options
			document.querySelector(".formADD").setAttribute("placeholder", "Plant Name");
			the2Kid.appendChild(select).classList.add("optionADD");
			select.appendChild(option1).classList.add("cats1");
			document.querySelector(".cats1").innerHTML = "Carrot";
			select.appendChild(option2).classList.add("cats2");
			document.querySelector(".cats2").innerHTML = "Onion";
			select.appendChild(option3).classList.add("cats3");
			document.querySelector(".cats3").innerHTML = "Tomato";
			select.appendChild(option4).classList.add("cats4");
			document.querySelector(".cats4").innerHTML = "Pepper";
			the2Kid.appendChild(input1).classList.add("submitADD");
			document.querySelector(".submitADD").setAttribute("type", "submit");
			document.querySelector(".submitADD").innerHTML = "ADD PLANT";

			var submitted = document.querySelector(".submitADD");

			submitted.addEventListener("click", tested, false);
			catter = false;

				function tested(e) {
					
					catter = true;

					//Create Elements Variables
					var removeInput = document.querySelector(".formADD");
					var removeSelect = document.querySelector(".optionADD");
					var removeSubmit = document.querySelector(".submitADD");
					var para = document.createElement("p");
					var paraHealth = document.createElement("p");
					var img = document.createElement("img");
					var option = document.createElement("option");

					if(e.path[1].childNodes[0].value == "") {
						document.querySelector("#alert").style.display = "block";
					} else {
						//fill the new div
						document.querySelector("#alert").style.display = "none";
						document.querySelector(".plants").appendChild(para).classList.add("plant");
						document.querySelector(".plants").appendChild(img).classList.add("plantImg");
						document.querySelector(".plantImg").id = "imgFix";
						document.querySelector(".plants").appendChild(paraHealth).classList.add("planthealthgood");
						document.querySelector("#mySelect").appendChild(option).id = e.path[1].childNodes[0].value+"Click";

						//add innerhtml to new children
						e.path[1].id = e.path[1].childNodes[0].value;
						document.querySelector(".plant").innerHTML = e.path[1].childNodes[0].value;
						document.querySelector(".plantImg").setAttribute("src", "images/"+e.path[1].childNodes[1].value+".png");
						document.querySelector(".planthealthgood").innerHTML = "HEALTHY";
						document.querySelector("#"+e.path[1].childNodes[0].value+"Click").innerHTML = e.path[1].childNodes[0].value;
						document.querySelector(".plants").appendChild(paraHealth).classList.add("planthealthgood");

						//remove form elements
						document.querySelector(".plants").removeChild(removeInput);
						document.querySelector(".plants").removeChild(removeSelect);
						document.querySelector(".plants").removeChild(removeSubmit);

						//Reassign plants var
						plants = document.querySelectorAll(".plants");
						var selectedPlant = document.querySelector("[selected=selected]");
					}
				}
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
