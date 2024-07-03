//  Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.



function MAP() {

	let bio = new Map<string, number>();
	bio.set("Zaid", 211);
	bio.set("Muzna", 119);
	bio.set("Arifa", 191);

	for (let [key, value] of bio) {
		console.log(`Student_Name : ${key} , Student_Id : ${value}`);
	}
};


MAP();