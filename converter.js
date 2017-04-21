console.log("Hello");

var enteredTemp = document.getElementById("originaltemp");
var finalTemp = document.getElementById("convertedtemp");
var celsiusTemp;
var fahrenheitTemp;

function toCelsius (num) {
	celsiusTemp = (enteredTemp.value - 32) * (5/9);
	finalTemp.innerHTML = "<p>" + celsiusTemp + "</p>";
	if (celsiusTemp > 32 || fahrenheitTemp > 90) {
		finalTemp.style.color = "red";
	} else if (celsiusTemp < 0 || fahrenheitTemp < 32) {
		finalTemp.style.color = "blue";
	} else {
		finalTemp.style.color = "green";
	}
}

function toFahrenheit (num) {
	fahrenheitTemp = ((enteredTemp.value * 1.8) + 32);
	finalTemp.innerHTML = "<p>" + fahrenheitTemp + "</p>";
	if (celsiusTemp > 32 || fahrenheitTemp > 90) {
		finalTemp.style.color = "red";
	} else if (celsiusTemp < 0 || fahrenheitTemp < 32) {
		finalTemp.style.color = "blue";
	} else {
		finalTemp.style.color = "green";
	}
}

// Get a reference to the button element in the DOM
var submit = document.getElementById("submit");
var reset = document.getElementById("reset");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  	if (document.getElementById("fahrenheitbutton").checked = true) {
  	toCelsius();
  } else if (document.getElementById("celsiusbutton").checked = true) {
  	toFahrenheit();
  }
}

function clearForm (clickEvent) {
	document.getElementById("fahrenheitbutton").checked = false;
	document.getElementById("celsiusbutton").checked = false;
	document.getElementById("originaltemp").value = "";
}

// Assign a function to be executed when the button is clicked
submit.addEventListener("click", determineConverter);
reset.addEventListener("click", clearForm);

enteredTemp.addEventListener("keypress", function (event) {
	if (event.which === 13) {
		determineConverter(event);
	}
});

// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.



