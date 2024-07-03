//  Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.


function FindVowels():void{
	const vowles: string = "aeiouAEIOU";
	for(let v of vowles){
		if (vowles.includes(v)){
			console.log(`Found first vowel ${v}`);
			break;
		}
		console.log(v);
	}
}

FindVowels();