//  Question 92: Write a function to remove the last element from an array and return the removed element.

let Favrt_fruits: string[] = ["Apple", "Mango", "Grapes" , "Banana"];

function Remove_last_element<T>(a:T[]):T | undefined{
	return a.pop();
}

console.log("Before Fruits : ",  Favrt_fruits,);
console.log(Remove_last_element(Favrt_fruits));
console.log("After Fruits : ",  Favrt_fruits,);