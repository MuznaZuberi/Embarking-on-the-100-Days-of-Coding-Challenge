//  Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

console.log("Before Synchronous");  // Synchronous
console.log("Muzna Amir");          // Synchronous
console.log("Izma Khan");           // Synchronous
setTimeout(()=>{
	console.log("Asynchronous");    // Asynchronous
},4000);
console.log("Ushba Zaidi");
console.log("Nice to meet you!");   // Synchronous
console.log("After Synchronous!");  // Synchronous