//   Question 81: Dividing over object properties: Create a function that will take an object as the argument and record all of its property and values.


function ObjectedProperty(obj : object) {
	for(let key in obj){
		console.log(`${key} : ${obj[key]}`);
	}
}

ObjectedProperty({ Make: "Toyota", Model: "Corolla", Year: 2021, Color: "Black" });



