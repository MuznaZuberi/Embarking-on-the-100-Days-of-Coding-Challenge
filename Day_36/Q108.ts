//  Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function Compare_two_strings(u : string , l : string):boolean{
	return u.toLowerCase()  === l.toLowerCase();
}

let Compare_to_uppercase = Compare_two_strings("PAKISTAN", "pakistan");
let Compare_to_lowercase = Compare_two_strings("typesript" , "TYPESCRIPT");

console.log(Compare_to_uppercase);
console.log(Compare_to_lowercase);

