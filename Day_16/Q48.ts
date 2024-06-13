//  Question 48: Combining arrays with spread operators: Suppose you compare the price of two separate laptop sets. Use the spread operator to merge these arrays in one array broken down by order, and then record their results.

let array_01: number[] = [100000 , 29000 , 37000 , 76000 , 89000];
let array_02: number[] = [90000, 40000, 67000, 87000, 210000];

let Spread_ope_array: number[] = [...array_01, ...array_02].sort((a, b) => a - b);
console.log("Laptops Prices : ", Spread_ope_array);