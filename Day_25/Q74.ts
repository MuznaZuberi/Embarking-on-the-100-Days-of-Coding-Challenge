//  Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.


let a: number = 10;
let b: number = 9;


// Swapping Variables

let a1 = a;
let b1 = b;

a1 = b;
b1 = a;

console.log(`Before Value of A =  ${a} , After Value of A  = ${a1}`);
console.log(`Before Value of B =  ${b} , After Value of B  = ${b1}`);