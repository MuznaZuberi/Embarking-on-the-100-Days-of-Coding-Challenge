//  Question 149: Explain the concept of the event loop in JavaScript with an example.

console.log("Hello!");
setTimeout(() => {
	console.log("Callback Queued!"); //This is event loop
},0);
console.log("World!");