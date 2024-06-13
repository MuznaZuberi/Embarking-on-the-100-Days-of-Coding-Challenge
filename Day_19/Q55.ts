//   Question 55: double numbers in an array, set a list of figures. Then, you can create a new list where each number is double its original value by using the trick.

let array_in_numbers : number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7];

let Double_number : number[] = array_in_numbers.map(num => num*2);


console.log("Original_Number : " , array_in_numbers);
console.log("\n");
console.log("Double_Number_Array : " , Double_number);
