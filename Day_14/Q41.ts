//  Magicians: create a list of wizards' names. Pass the array to a function called Show_Magicians(), which will print each magician's name on it

let Magicians_names : string[] = ["Derren Brown" , "Copperfield" , "Criss Angel" , "David Blaine" , "Harry Houdini"];

function show_magicians(Magicians_names : string[]) {
	for(let magic of Magicians_names ){
		console.log(magic);
	}
}


show_magicians(Magicians_names);

