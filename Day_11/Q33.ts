//  Optionally numbers: Optionally numbers indicate their position in the array, such as first or second. Except for 1, 2, and 3, the majority of ordinal numbers are ending .ending

//1.  Hold the numbers 1 to 9 in a row.
 
let Optionally_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//2.  Use the array to loop around.

for(let loop of Optionally_numbers){
	if(loop == 1){
		console.log(`${loop}${"st"}`);
	}

	else if(loop == 2){
		console.log(`${loop}${"nd"}`);
	}


	else if(loop == 3){
		console.log(`${loop}${"rd"}`);
	}

	else if(loop == 4){
		console.log(`${loop}${"th"}`);
	}

	else if(loop == 5){
		console.log(`${loop}${"th"}`);
	}

	else if(loop == 6){
		console.log(`${loop}${"th"}`);
	}

	else if(loop == 7){
		console.log(`${loop}${"th"}`);
	}

	else if(loop == 8){
		console.log(`${loop}${"th"}`);
	}

   else if(loop == 9){
		console.log(`${loop}${"th"}`);
	}

	else{
		console.log("Error!");
	}
}

