//   Question 56: Keep only strings in the list: when you have more than one type of item, create a new list that has just those words.

let Mixed_array  = ["Zimal" , 1 , 83 , 71 , true , "Zaid" , "Ashir" , false , 111];

let just_strings  = Mixed_array.filter(str => typeof str === "string" );

console.log(just_strings);