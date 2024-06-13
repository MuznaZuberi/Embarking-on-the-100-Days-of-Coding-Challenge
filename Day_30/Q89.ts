//  Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function string_convrt__to_numb(str:string):number{
	return parseFloat(str);
}

let result = string_convrt__to_numb("12.9");
let result_01 = string_convrt__to_numb("1999");

console.log(result);
console.log(result_01);