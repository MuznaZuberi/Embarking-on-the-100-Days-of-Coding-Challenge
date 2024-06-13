//  Question 78: Function Expressions versus Function Declarations: When you create one of them that performs the same task, for example to square a number, compare those expressions and declarations.



// Function Expressions 
let exp = function(n1 : number , n2 : number ):number{
	return n1 * n2;
}

let Multiply = exp(7, 7);
console.log("Multiplication : ", Multiply);








// Function Declarations

function dec(n1 : number , n2: number):number{
	return n1 * n2;
}

let Another_Multiply = dec(7, 7);
console.log("Another_Multiplication : ", Another_Multiply);