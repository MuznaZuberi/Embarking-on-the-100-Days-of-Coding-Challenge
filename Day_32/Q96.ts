//  Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.


function Sum_of_numbers(...a:number[]):number{
	return a.reduce((total,num)=>total+num,0);
}

let Total_sum = Sum_of_numbers(1000,20000,90000,100000);
console.log("Total_Amount : " , Total_sum);