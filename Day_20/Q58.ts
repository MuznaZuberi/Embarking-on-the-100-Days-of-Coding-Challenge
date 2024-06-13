//   Question 58: Average Score Calculator: Create a simple program that will take many scores and find their average.

function Score(...a : number[]):number{
	let res = a.reduce((total, num) => total + num, 0) / a.length;
	return res;
}


let Avg_Score = Score(40, 60, 70, 90, 100);
console.log("Avg_Score :" , Avg_Score);
