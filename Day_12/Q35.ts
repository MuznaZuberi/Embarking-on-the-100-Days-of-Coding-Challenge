//  Animals: at least three different animals with the same characteristics should be considered. To print the name of each animal, store the names of these animals in the list and use the for loop

let Animals : string[] = ["Dog" , "Tiger" , "Cat" , "Camel" , "Cow" , "Leopard"];
for(let ani of Animals){
	console.log(ani);
}


console.log("\n");
// 1.If you want to print a statement about every animal, such as A dog would be an excellent pet, modify your program

for(let a of Animals){
	console.log("A",a,"would be an excellent pet");
}


console.log("\n");

//2. At the end of your program, write what these animals have in common. You'd be able to write a sentence like any of those animals would become an amazing pet!

console.log('"Any of Those animals would become an amazing pet!"');