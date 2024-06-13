// Stealing names: store a person's name and include some whitespace characters at the beginning and end of the name. Ensure that each character combination, "t" and "n" is used at least a few times. To display the whitespace around the name, print it once. After removing the white spaces, you can print your name.
//WhiteSpace
let Persons_name = "\t Muzna Amir \n";
console.log("Some Whitespace : ", Persons_name);
//print the name after striping the white spaces.
let Persons_name1 = Persons_name.trim();
console.log("Striping: ", Persons_name1);