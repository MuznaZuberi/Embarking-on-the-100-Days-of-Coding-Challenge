//  Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function String_Numb(number : number , string: string):number{
	return number + Number(string);
}

let res = String_Numb(30, "5");
console.log(res);
