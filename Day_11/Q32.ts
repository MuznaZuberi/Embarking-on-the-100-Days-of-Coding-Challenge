// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username

//1. You can create a list of five or more usernames, called current_user

let current_user: string[] = ["Harry", "George", "Jack", "Charles", "Noah", "Oliver", "Jameson"];


//2. You will create a new list of 5 user names called new_users.Verify that the current_users list also contains one or more of the new usernames. To see if any new username has already been used


let new_users: string[] = ["Jack", "Cooper", "Riley", "Harry" , "Peter"];

//3.  loop through the new_users list. If it has, print a message that the person will need to enter a new username. Print a message indicating that the username is available if you don't use it.

for(let users of new_users){
	if(users == "Jack" || users == "Harry"){
		console.log(users , "Will need to enter a new username")
	}
  
  else{
    console.log(users , "is available")
  }
}
