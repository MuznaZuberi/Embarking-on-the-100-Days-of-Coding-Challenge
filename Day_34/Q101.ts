//  Question 101: Generate a random integer between 1 and 10.

function Random_numb():number{
	return Math.floor(Math.random() * 10) + 1;
}

let result = Random_numb();
console.log("Random_numb : ", result);