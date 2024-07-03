//  Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.


// Promise Resolve

function Promise_Resolution(user_name : string  , user_age : number) {
	return new Promise((Resolve , Reject)=>{
		setTimeout(() => {
			if (user_name === "Muzna Amir Zubairi" && user_age === 24) {
				Resolve(`Promise_Resolution:  Successfully Login`);
			}

			else {
				Reject("Invalid Information!");
			}
		}, 4000);
	});
}

Promise_Resolution("Muzna Amir Zubairi", 24)
.then((message)=>{
	console.log(message);
})
.catch((Error)=>{
	console.log(Error);
})



// Promise Reject

function Promise_Rejection(email : string , password : string) {
 return new Promise((Resolve , Reject)=>{
 	setTimeout(()=>{
		  if (email === "muzna@.com" && password === "9911"){
			  Resolve("Successfully Login");
		  }

		  else{
			  Reject(`Promise_Rejection:  Invalid Info!`);
		  }

	  },7000);
		  });
	
}



Promise_Rejection("Muzna@.com" , "9911")
.then((message)=>{
	console.log(message);
})
.catch((Error)=>{
	console.log(Error);
})