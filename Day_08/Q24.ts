//  Additional Conditional Tests: You don't need to limit the number of tests you generate to 10. Write more tests if you'd like to try more comparisons. For each of the following, at least one true and one false result must be obtained:

// 1.  With strings, tests for equality and inequality
console.log("With strings equality and inequality:");
console.log("black" == "Black");// (This  condition is false)*/ 

console.log("Black" == "Black"); // (This  condition is true);



console.log("\n");

// 2. Tests using the lesser case function

console.log("lesser case function:");
let My_country: string = "Pakistan";
console.log("Lower_Case : ", My_country.toLowerCase());



console.log("\n");


// 3.  A numerical test involving equality and inequality greater than or equal to, greater than or equal to, less than or equal to

console.log("Numerical test involving equality and inequality:");
let num1: number = 9;
let num2: number = 2;
console.log("Greater_than :", num1 > num2);
console.log("Less_than :", num1 < num2);


console.log("\n");

// 4.  The tests using "and" or "or" operators

console.log("And or Or operators:");
console.log("true" && "false");
console.log("true" || "false");


console.log("\n");


// 5.  Check to see if the item is in the array

console.log("Check to see the item is in the array :");
let own_cars: string[] = ["Swiftie", "Liz Lemon", "Minnie", "Adele"];
console.log("The item is in the array : " , own_cars.includes("Swiftie"));



console.log("\n");

//6.  Test whether an item is not in an array
console.log("Test an item is not in an array :");
let vowels_words: string[] = ["a", "e" , "o" , "u"];
console.log("An item is not in an array : ", !vowels_words.includes("i"));





