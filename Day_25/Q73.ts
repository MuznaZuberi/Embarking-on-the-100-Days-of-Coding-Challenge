//  Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

function Assign_Updated() {
	// let's create initial value
	let initial_value: number = 9;
	console.log("Initial_Value : ", initial_value);
    
    // let's create updated value
	initial_value = 30;
	console.log("Updated_Value : ", initial_value);

}

Assign_Updated();
