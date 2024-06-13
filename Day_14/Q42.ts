//  Great Magicians: Get a copy of your program for exercise 39. Create a function called make_great() to modify an array of magicians by adding the phrase "The Great" to each magician's name. To see if a list is modified, call show_magicians()

let Magicians_names : string[] = ["Derren Brown" , "Copperfield" , "Criss Angel" , "David Blaine" , "Harry Houdini"];

function make_great(Magicians_names : string[]) {
	for (let great of Magicians_names){
		console.log(great, "The Great magician");
	}
}


function show_magicians(Magicians_names : string[]){
	for (let show of Magicians_names) {
		console.log(show);
	}
}

console.log("Make_Great :");
make_great(Magicians_names);
console.log("\n");
console.log("Show_Magicians :");
show_magicians(Magicians_names);
	




