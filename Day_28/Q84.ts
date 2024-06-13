//  Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".


function Replaces_all_the_word_JS_with_TS(rep : string):string{
	return rep.replace(/JavaScript/g , "TypeScript");
}

let Replacing = Replaces_all_the_word_JS_with_TS(`I love "JavaScript" cuz "JavaScript" is a strong based programming language.`);
console.log(Replacing);