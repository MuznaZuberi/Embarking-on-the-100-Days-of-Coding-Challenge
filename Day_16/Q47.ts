//  Question 47: Advanced Array Destructuring: If you have an array of objects representing various laptops, each with a properties make, model and year, it is useful to deserialize the first and two laptops into variables by using arrays. These variables should then be logged.


let Laptops = [
	{ make: "Apple", model: "MacBook 10,1", year: 2017 },
	{ make: "Dell", model: "XPS 15", year: 2021 },
	{ make: "HP", model: "Spectre x360", year: 2021 },

];

let [First_Laptop, Second_Laptop] = Laptops;
console.log(First_Laptop);
console.log(Second_Laptop);