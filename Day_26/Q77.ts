//  Question 77: Default Parameters: Create a greeting function for the user. The user's name should be used as a parameter to say hello. It should greet the anonymous user if no name is specified.


function GreetUser(user_name : string = "Muzna"){
	console.log(`Hello ${user_name}`);
}

GreetUser();
GreetUser("Arifa");
GreetUser("Zahra");