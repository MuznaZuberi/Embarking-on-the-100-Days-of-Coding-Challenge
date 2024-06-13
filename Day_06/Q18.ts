//  Seeing the world: imagine going to five places in the world you want to see

//1. You can store these locations in an array. Check that the array does not have an alphabetic order

let I_want_to_see_these_places : string[] = ["Thailad", "Pakistan", "Malaysia", "Japan", "India"];

//2 . You will print an array in the original order
console.log("Original_Order : ", I_want_to_see_these_places);

//3 . Without affecting the real list, you can print an array in order alphabetically.
console.log("Alphabetical_Order : ", [...I_want_to_see_these_places].sort());

//4.  By printing it, you will show that your array is still in its original order
console.log("Original_Order : ", I_want_to_see_these_places);

//5. You can print an array in reverse alphabetical order, without changing the order of your original list. 
let reverse = [...I_want_to_see_these_places].sort().reverse();
console.log("Reverse_Alphabetical_Order: ", reverse);

//6. By printing it again, you'll show that your array is still in its original position.
console.log("Original_Order : ", I_want_to_see_these_places);

//7. • Reorder your list order. To show that its order is changed, print an array.

console.log("Reverse_Order :", [...I_want_to_see_these_places].reverse());

//8. Again, reverse the order in your list. You can print a list that shows it is back in its normal order.

console.log("Back in its normal order : ", I_want_to_see_these_places);

//9. To store the array in alphabetical order, you must sort it out. To show that the order of the array has been changed, print the array.

console.log("Alphabetical_Order : ", I_want_to_see_these_places.sort());

//10.  Sort to change your array so it’s stored in reverse alphabetical order. To see whether its order has been altered, print the list.

console.log("Reverse_Alphabetical_Order : ", I_want_to_see_these_places.sort().reverse());