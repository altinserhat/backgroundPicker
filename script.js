var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let random = document.querySelector("#random");
const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// Color setting function
function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ";";
}

// Random HEX generator
function setRandom() {
	let newHex = [];
	for (let i = 0; i < 6; i++) {
		newHex.push(colorArray[Math.floor(Math.random() * 16)]);
	}
	let hexCode = newHex.join("");
	console.log(`#${hexCode}`);
	return `#${hexCode}`;
}

function hexAll() {
	let hexOne = setRandom();
	let hexTwo = setRandom();
	body.style.background = `linear-gradient(to right, ${hexOne}, ${hexTwo})`;
	css.textContent = body.style.background + ";";
}

// Page load
document.onload = setGradient();

// Color input changes
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Random button listener
random.addEventListener("click", hexAll)