//  Question 144: Explain the use of the Promise.all() method with an example.

let obj_01 = {
	name: "Muzna Amir",
	qualification: "Graduation",
	id: 9118,
};


let obj_02 = {
	name: "Arifa Amir",
	qualification: "Graduation",
	id: 2118,
};


let obj_03 = {
	name: "Anamta Amir",
	qualification: "Graduation",
	id: 3118,
};


function All_Promises() {
	return new Promise((resolve , reject)=>{
        setTimeout(()=>{
			resolve(obj_01  + " " +  obj_02 + " " + obj_03);

		});
				});
}

All_Promises();


let res = Promise.all([obj_01 , obj_02 , obj_03]).then((message)=>{
	console.log(message);
})





