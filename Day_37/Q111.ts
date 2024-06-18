//  Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function Person_age(a:number){
	if(a <13){
		console.log("Chid");
	}

	else if(a <=19){
		console.log("Teenager");
	}

	else if(a >20){
		console.log("Adult");
	}
};


Person_age(11);
Person_age(17);
Person_age(77);