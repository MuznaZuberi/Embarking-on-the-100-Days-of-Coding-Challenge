//  Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

function Value_isNaN(a:any):boolean{
	return isNaN(a);
}

let str = Value_isNaN("Pakistan");
console.log("isNaN? : " , str);

let bool = Value_isNaN(true);
console.log("isNaN? : ", bool);

let num = Value_isNaN(19);
console.log("isNaN? ", num);

