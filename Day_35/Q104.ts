//  Question 104: Create a function that generates a random hexadecimal color code.

function Random_hexadeci_color_code():string{
	let hexa_color = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6, "0");
	return hexa_color;
}

let random_color_code = Random_hexadeci_color_code();
console.log("Color_code :", random_color_code);
