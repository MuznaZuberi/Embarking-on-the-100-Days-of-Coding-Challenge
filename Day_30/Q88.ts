//  Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

function Nearest_integer(val : number):number{
	return Math.round(val);
}

let res = Nearest_integer(2.5);
let res_01 = Nearest_integer(4.4);

console.log(res);
console.log(res_01);
