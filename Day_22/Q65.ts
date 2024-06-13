//  Question 65: Find the Remainder: Create a function that takes two numbers as input and displays the result of dividing them using the % operator. For instance, calling the function remainder(5, 2) should return 1.


function Remainder(num1 : number , num2 : number):number{
	return num1 % num2;

}

let Result = Remainder(10, 3);
console.log("Remainder_Val is : ", Result);