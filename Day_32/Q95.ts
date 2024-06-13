//  Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.


function Greater_than(){
   let array : number[] = [20,90,9,10,17,89,100];
   let res = array.filter(num=>num>10); 
   return res;
}

console.log(Greater_than());