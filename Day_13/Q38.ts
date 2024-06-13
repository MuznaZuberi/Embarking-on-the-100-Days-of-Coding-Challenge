//  Cities: Create a function named describe_city() that will accept the city's name and its country. A simple sentence, such as Karachi in Pakistan, should be printed out by the function. Please set a default value for the country parameter. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city : string = "Karachi" , country : string = "Pakistan") {
	console.log(`${city} is in "${country}"`);
}


describe_city();
describe_city("Peshawar");
describe_city("Ottawa", "Canada");