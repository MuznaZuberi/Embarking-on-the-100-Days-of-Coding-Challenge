// . Sandwiches: Create a function that accepts an array of items that a person wants in a sandwich. The function must have one parameter to collect as many items as the Function call provides, and it should display a summary of the sandwich that is ordered. Use a different number of arguments each time you call this function three times

function Sandwiches(...items : string[]){
	items.join(" , ");
	console.log(`Making the sandwich with: ${items}.`);
}

Sandwiches("Ketchup" , "Butter" , "Bread");
Sandwiches("Mayonaise", "Salt", "BlackPaper");
Sandwiches("Oregano", "Cabbage", "Carrot");

