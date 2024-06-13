//  Cars: Create a function to store information about the vehicle in an object. A manufacturer and model name should always be provided for the function. An arbitrary number of keyword arguments should therefore be accepted. The function needs to be called with the information requested, as well as two additional pairs of name=value: color or optional features. To ensure that all information is correctly stored, print the object that has been returned.

function Car(manufacturer : string , model :string , ...other:any[]){
	other.join(" , ");

	let obj : {
		manufacturer: string,
		model : string,
		other : {
			color : string,
			year : number,
			features: string;

		}
	}

	return { manufacturer , model , other };
}

console.log(Car("Toyota", "Land Cruiser", "Black", 2021));
console.log(Car("Toyota", "Land Cruiser", "White", 2019));
console.log(Car("Ford", "Fiesta", "Blue" , "Sunroof"));
