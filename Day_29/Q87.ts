//  Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function Substring(a:string):string{
	return a.substring(0,10);
}

let result = Substring("Typescript is a strong based programming language");
console.log(result);