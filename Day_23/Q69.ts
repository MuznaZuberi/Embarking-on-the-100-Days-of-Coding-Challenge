//  Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.


function Dividend_Reminder(a:number , b:number):{Quotient : number , Remainder : number}{
	let Quotient = Math.round(a / b);
	let Remainder = a % b;
	return { Quotient, Remainder };
}

let results = Dividend_Reminder(20, 90);
console.log(results);

