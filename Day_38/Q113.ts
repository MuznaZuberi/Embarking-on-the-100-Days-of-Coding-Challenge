//  Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.


function Capital() {
	let Countries_Capital = new Map<string , string>();
	Countries_Capital.set("Pakistan" , "Islamabad");
	Countries_Capital.set("United Kingdom" , "London");
	Countries_Capital.set("U Arab Emirates" , "Abu Dhabi");

	if(Countries_Capital.has("Japan")){
		console.log(`The Capital of Japan is : ${Countries_Capital.get("Japan")}`);
	}

	

	else{
		console.log(`The map does not include Japan.`);
	}
}

Capital();