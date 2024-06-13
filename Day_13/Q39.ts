//  City Names: Write a function called city_country() that takes in the name of a city and its country. A string with such a format should be returned in the function: 
//"Lahore, Pakistan".
//Call your function with at least three city-country pairs, and print the value that’s returned.


function  city_country(city : string = "Islamabad" , country : string = "Pakistan"){
	console.log(`"${city} , ${country}"`);
}


city_country();
console.log("\n");
city_country("Berlin", "Germany");
console.log("\n");
city_country("Washington, D.C.", "America");
console.log("\n");
city_country("Tokyo", "Japan");