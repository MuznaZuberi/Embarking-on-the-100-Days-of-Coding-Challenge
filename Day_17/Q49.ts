//  Question 49: Function with Rest Parameters: Create a function that will use the resting parameter to represent different hobbies. It's supposed to record every hobby with a statement saying you're enjoying it.

function Hobbies(...a : string[]) {
	 a.join( " " );
	 for(let hob of a){
		 console.log("I enjoy", hob);
	 }

};

Hobbies("Cricket", "Reading", "Learning", "Caoding", "Football");
