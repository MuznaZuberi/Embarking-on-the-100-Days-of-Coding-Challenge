//  Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.


function Colors(a:number){
	switch (a) {
		case 1:
			console.log(`This is a Black color`);
			break;
		
		case 211:
			console.log(`This is a Purple color`);
			break;

			case 191:
			console.log(`This is a Brown color`);
			break;

			case 901:
			console.log(`This is a Golden  color`);
			break;
		default:
			console.log("Invalid Color!");
			break;
	}
};

Colors(901);
Colors(1);
Colors(800);
