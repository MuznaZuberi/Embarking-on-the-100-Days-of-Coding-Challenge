//  Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function Checking_TextPresence(a:string):boolean{
	return a.includes("JavaScript");
}

let check = Checking_TextPresence("I like JavaScript"); 
let another_check = Checking_TextPresence("I like TypeScript");
console.log("Is Present : ?" , check);
console.log("Is'nt Present : ?", another_check);