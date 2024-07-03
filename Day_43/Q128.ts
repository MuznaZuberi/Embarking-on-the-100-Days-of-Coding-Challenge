// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.


// Arrow Function with Rest Parameter

let Arrow_func = (...products : number[]) => {
	return products.reduce((total,num)=>total+num,0);
   
}

let Total_Products = Arrow_func(1000,9000,10000,11000,20000,90000);
console.log("Total_Amount : " , Total_Products);