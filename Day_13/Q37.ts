//  Large Shirts: With a message that reads "I love TypeScript", you can change the make_shirt() function to allow shirts to be large in default. Use the default message to make a large, medium or any size shirt with different messages.

function make_shirt(size : string  = "Medium & Large" , message : string = "I love TypeScript"){
	console.log(`To make a ${size} shirt with the message "${message}" printed on it`);

}

make_shirt();
make_shirt("Xl", "Xl size are available");
  
