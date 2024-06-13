//  Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.


// This is a block scope
{
    let message : string = "visible inside the block";
    console.log(message);

    const text :string = "also only inside the block";
    console.log(text);
}

try {
    console.log(message); // error
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    console.log(text); // error
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}