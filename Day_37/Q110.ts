// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function Grades(a:number){
	if(a >90){
		console.log("A Grade");
	}

	else if(a >80){
		console.log("B Grade");
	}

	else if(a >70){
		console.log("C Grade");
	}

	else if(a >50){
		console.log("D Grade");
	}

	else{
		console.log("Failed");
	}
};

Grades(91);
Grades(70);
Grades(41);