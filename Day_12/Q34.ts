//  Pizzas: Consider three types of pizza that are your favorites. To print the name of each pizza

let Favorite_Pizzas : string[] = ["BBQ_Chicken" , "Veggie" , "Hawaiian" , "Chicken_Fajjita" , " Supreme"];


// 1.  You can change the for loop so that your sentence is printed with a pizza's name rather than just its real name. You're supposed to have a single line of output that has just the statement "I like pepperoni pizza" as part of each pizza.

for(let pizza of Favorite_Pizzas){
	console.log("I like" , pizza , "pizza");
}  

console.log("\n");

// 2.  At the end of your program, outside the for loop, add a line indicating how much pizza you like. Three or more lines on the type of pizza you're fond of and then an additional sentence such as "I love pizza" are to be included
console.log("I  love BBQ_Chicken pizza" );
