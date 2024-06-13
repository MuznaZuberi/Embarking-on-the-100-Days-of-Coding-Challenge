//  Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.


function Decimals(a:number , b:number):number{
		return Math.round(a * b * 100) / 100;
}

let result = Decimals(0.1, 0.9);
console.log(result)