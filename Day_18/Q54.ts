//   Question 54: How to create flexible object keys: You will learn how to create a list that allows you to change the name of each section according to what you need at the time, such as changing labels based on user preferences.

// A way to make a flexible list
function DynamicKey(key: string, value: string) {
    let Dynamic_Object = {};


    // Setting up a section in the list with a changeable name


    Dynamic_Object[key] = value;
    return Dynamic_Object;
}



let Result = DynamicKey("Backgroung", "Dark");

console.log(Result);