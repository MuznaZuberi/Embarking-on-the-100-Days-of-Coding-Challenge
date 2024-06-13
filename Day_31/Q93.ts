//  Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

let favrt_fruits: string[] = ["Apple", "Peach", "Banana" , "Grapes"];

function Find_the_index():void{
	favrt_fruits.indexOf("Banana");
	favrt_fruits[2] = "Mango";
	console.log(favrt_fruits);
}

Find_the_index();

