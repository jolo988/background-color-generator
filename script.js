// read both color inputs (select both inputs)
// add text with color values in css format (select h3)
// by assign listerner event
// query the background

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random")


function setGradient () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+", " 
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


function randomColor() {
	var letters = "0123456789ABCDEF";
	var newColor = "#";
	for (var i = 0; i < 6; i++) {
		newColor += letters[Math.floor(Math.random()*16)];
	}
	return newColor
}

// random hexadecimal color code.

// Here's a breakdown of how the function works:

// The variable letters is defined as a string of all possible hexadecimal digits: "0123456789ABCDEF".
// The variable color is initialized as the string "#" to represent the beginning of a hexadecimal color code.
// A loop is started that runs six times, using the variable i as the loop counter.
// Inside the loop, a random integer between 0 and 15 is generated using Math.random() * 16, rounded down to the nearest integer using Math.floor(), and used as an index into the letters string to select a random hexadecimal digit.
// The selected digit is added to the color string, so that after six iterations of the loop, color contains a complete six-digit hexadecimal color code.
// The final color string is returned as the result of the function.
// Overall, this function generates a random color code by selecting six random hexadecimal digits and concatenating them together with a "#" character to form a valid color code string. The resulting color will be a random shade of red, green, or blue, since these are the primary colors used to create all other colors in the RGB color model.



function randomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

random.addEventListener("click", randomGradient);


// BONUS: Add a random button which generates 
// two random numbers for the colour inputs.
// assign button variable DONE
// create random function (random math) DONE
// create function for color1 and color2 to run DONE
// click listen event (no text needed) DONE



