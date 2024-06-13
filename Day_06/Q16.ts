// More guests: It's a bigger dinner table that you found, so there's more room. Let's say I invite three more people to dinner


//1. You're going to start with the Exercise 15 program. At the end of your program, insert a print message to let people know that you've found an extra dining table.

let People_inform: string[] = ["Aiman", "Zunaiba", "Zimal", "Muqadas", "Zunaira", "Izma"];
for(let c of People_inform){
	console.log("Hi!", c, "I found a bigger dinner table");
} 


console.log("\n");

//2.  At the beginning of your list, insert a new guest
console.log("Add one new guest to the beginning of your array.");

let Add_one_new_guest_to_the_beginning = People_inform;
Add_one_new_guest_to_the_beginning.unshift("Wardha");
for(let add of Add_one_new_guest_to_the_beginning){
	console.log(add);
}

console.log("\n");


//3.  Add a new guest to the center of your array. For adding a new guest to the end of your list, use append(). • Print a new set of invitation messages, one for each person on your list.

console.log("Add a new guest to the center of your array");
let Add_one_new_guest_to_the_middle = Add_one_new_guest_to_the_beginning;
Add_one_new_guest_to_the_middle.splice(4, 0, "Janifer");
for (let mid of Add_one_new_guest_to_the_middle) {
	console.log(mid);
}

console.log("\n");

// For adding a new guest to the end of your list


console.log("Adding a new guest to the end of your list")
People_inform.push("Haider");
console.log(People_inform);

console.log("\n");

console.log("New set of invitation ");
for (let set of People_inform) {
	console.log("Hi!", set, "Let’s celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home. ");
}


