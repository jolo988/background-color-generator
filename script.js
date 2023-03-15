const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const random = document.getElementById("random")

// setGradient: sets left (color1.value) and right (color2.value) of the background base on "input" DOM,
// css.textContent: notifies user of hexadecimal color codes based on "input" DOM 
function setGradient () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+", " 
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";"
}

// "input" DOM for user to choose 2 color gradients
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// randomColor generates random hexadecimal color code 
function randomColor() {
	let letters = "0123456789ABCDEF"; // contains hexadecimal color code + A to F
	let newColor = "#"; // initializer

	// randomly generated index choosen by randomly multiplying any number between 0-1 by 16, 
	// then rounding it down with Math.floor 
	// then looping 'letters' six times to return 'letters' by generated index
	for (var i = 0; i < 6; i++) {
		newColor += letters[Math.floor(Math.random()*16)];
	}
	return newColor
}

// Both color values call randomColor() for both color schemes, 
// and call setGradient() to set random background gradient
function randomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

// 'random' button randomly chooses color gradient when clicked by user, by calling randomGradient()
random.addEventListener("click", randomGradient);


