//  Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

let courses : string[] = ["Python" , "Javascript" , "Hello" , "World" , "TypeScript" , "Web Development"];
let each_words_length : number[] = courses.map(str => str.length);
console.log(each_words_length); 
