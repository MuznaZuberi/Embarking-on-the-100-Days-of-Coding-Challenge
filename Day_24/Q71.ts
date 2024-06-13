//  Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.


// Let value can be changed or reassign
let my_name: string = "Muzna Amir";
my_name = "Muzna Zubairi";  // let value can be reassign
console.log(my_name);






// const value cannot changed or reassign
const my_age: number = 24;

try{
	my_age = 21;  //error  Cannot assign to 'my_age' because it is a constant.

}

catch(error){
	console.log("Cannot assign to 'my_age' because it is a constant");
}
