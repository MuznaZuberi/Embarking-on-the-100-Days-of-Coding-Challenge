//  Question 64 : I need to create a function that can combine a string of text with a number. For instance, if I input "Age: " and 30, the function should return "Age: 30".

function Concate_String_and_Number(a : string , b :number):string{
	return a+b;
}

let Combination = Concate_String_and_Number("Age : ", 20);
console.log(Combination);
