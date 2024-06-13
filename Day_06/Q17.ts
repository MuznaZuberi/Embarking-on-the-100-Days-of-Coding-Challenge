// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests

//1. You will begin with Exercise 16's programme. You can create a new line to print the message that only two people will be invited for dinner.
let Shrinking_Guest_List: string[] = ["Wardha", "Aiman", "Zunaiba", "Zimal", "Janifer", "Muqadas", "Zunaira", "Izma", "Haider"];                                                                                                                                                                        
                                                                                   

console.log("Hi! I only two people will be invited for dinner.");
console.log("\n");

//2 .  Until you have two names left on your list, remove the guests one by one. Print a message to that person each time you add his name to your list apologizing for not being able to have dinner with them.

console.log("Remove guests until you have two names left on your list:");
while(Shrinking_Guest_List.length > 2){
	let remove_the_guests = Shrinking_Guest_List.pop();
	console.log(remove_the_guests, "Apologizing for not being able to have dinner with them");
}

console.log("\n");

//3 . Tell each of the two people on your list that they still have to be invited

console.log("Two people still on your list:")
for(let still_guest of Shrinking_Guest_List){
	console.log("Hi Dear!", still_guest, " you still have to be invited");
}

console.log("\n");

//4. To create an empty list, remove the last two names from your list. To ensure that at the end of your program, there is no empty list, print it.

console.log("Empty List:");

Shrinking_Guest_List.pop();
Shrinking_Guest_List.pop();
console.log("Empty_guest_list" , Shrinking_Guest_List);

