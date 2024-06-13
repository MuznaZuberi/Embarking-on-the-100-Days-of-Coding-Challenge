//   Question 60: SelfRunning User Profile: To allow you to tell the user's name and age, make a Quick Setup profile for this user.


let User_Profile = {
	function() {
		let user_name: string = "Janifer";
		let user_age: number = 23;
		let is_app_developer: boolean = true;

		console.log(`User_name : ${user_name} , User_age : ${user_age} ,  Is_app_developer : ${is_app_developer}`);

		return user_name + user_age + is_app_developer;
	}
};

User_Profile.function();