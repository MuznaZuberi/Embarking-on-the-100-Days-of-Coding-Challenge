 //Name Cases: When you have a person's name stored in a variable, then print that person's name into lowercase, uppercase, and bottomcase.

let persons_name: string = "Muzna amir";

//LowerCase

console.log("LowerCase" , persons_name.toLowerCase());

//UpperCase

console.log("UpperCase" , persons_name.toUpperCase());


//BottomCase

console.log("TitleCase" , persons_name.replace(/\b\w/g, c => c.toUpperCase()));

