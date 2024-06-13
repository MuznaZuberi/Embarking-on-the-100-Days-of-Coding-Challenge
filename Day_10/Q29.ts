// Favorite Fruit: Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array

// 1.  You make a bunch of your three favorite fruits and call them favorites_fruits

let Favorite_Fruits : string[] = ["Apple" , "Mango" , "Pineapple"];

// 2. Write five if statements. Each should check to see if you've got a particular fruit on your list. If the fruit is part of an array, then a statement like "You love bananas" should be made in the if block

if(Favorite_Fruits.includes ("Mango")){
	console.log("I like Mango very well");
}

if(Favorite_Fruits.includes("Pineapple")){
	console.log("I like Pineapple very well");
}

if(Favorite_Fruits.includes("Orange")){
	console.log("I don't like orange");
}

if(Favorite_Fruits.includes("Apple")){
	console.log("I like Apple very well");
}

if(Favorite_Fruits.includes("Watermelon")){
	console.log("I don't like Watermelon");
}

