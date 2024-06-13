//  Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.



//  A simple function that calculates the area of the rectangle
function Area_of_rectangle(length : number , width : number):number{
	return  length * width ;
}



//  Convert it to a function of an arrow

let calculation = (length : number , width : number) : number =>{
	return length * width;
}

let result = (calculation(2, 6));
console.log(result);