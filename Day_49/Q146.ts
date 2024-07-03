// Question 146: Show an example of a callback function used to filter an array of numbers.


// Callback Function

function Arrays(array:number[]) {
	console.log(array);
}


function Filter_Array(Callback : (array:number[])=>void):void{
	let array : number[] = [1,2,3,4,5,6,7,8,9];
	let filter_array = array.filter(num => num % 2 === 1);

	Callback(filter_array);
}

Filter_Array(Arrays);