//  Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function find_Position(a:string):number{
	return a.indexOf("typescript");
}

let res = find_Position("I like doing a coading in typescript");
console.log(res);
