//  Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

async function multiplication(value_01 : number , value_02 : number) {
	return value_01 * value_02;
}


async function multi() {
	let res = await multiplication(2, 7);
	console.log("Multiplication : ", res);
}

multi();