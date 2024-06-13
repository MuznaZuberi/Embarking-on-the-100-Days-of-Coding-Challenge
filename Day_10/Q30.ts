//  Hello Administrator: Create a list of 5 or more usernames, with the name 'admin'. Imagine you're writing a code that prints a greeting to every user when they log on to the website. Print a greeting to each user by looping through the array

let User_names: string[] = ["Admin", "Janifer", "Ushba", "Mudasir", "Zunaiba", "Saba"];


// 1. If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

for(let names of User_names){
	if(names == "Admin"){
		console.log("Is there a status report you'd like to see, administrator?"); // 1. If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

	}

	else{
		console.log("Hi!", names, "Thanks for logging on again.");  // 2.  Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

	}
};
