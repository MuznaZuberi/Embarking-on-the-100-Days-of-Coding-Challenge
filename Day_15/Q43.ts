//  Unchanged Magicians: begin working from exercise 40. Use a copy of the list of magicians' names to call the function make_great(). Return the new array and store it in a separate array because your original array is not going to change. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name


let Magicians_names : string[] = ["Derren Brown" , "Copperfield" , "Criss Angel" , "David Blaine" , "Harry Houdini"];

function make_greet(){
	console.log("Original_Magicians:");
	for(let magic of Magicians_names){
		console.log(magic);
	}

	console.log("\n");

}



function show_magicians(){
	make_greet()
	let new_array = Magicians_names;
	console.log("Greet_Magicians:");
	for (let greet_magic of new_array){
		console.log(greet_magic, "the great magician");
	}
}

show_magicians();
