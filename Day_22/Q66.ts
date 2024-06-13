// Question 66 : Verification of Logical AND: Develop a function that verifies two boolean (true or false) values. It should return true only when both values are true, using the && operator. For example, if the checkbox is true (true, false), it should return false.

function Conditional_Statement(a : boolean , b:boolean):boolean{
	return a && b;

}

let Booleans = Conditional_Statement(true, false);
console.log("The Conditiona is : ", Booleans);