//  Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

function Seasons_of_the_Year(a : string){
	switch (a) {
		case "June":
		case "July":
		case "August":
			return "Summer";
			break;

		case "December":
		case "January":
		case "February":
			return "Winter";
			break;

		case "March":
		case "April":
		case "May":
			return "Autum";
			break;

		case "September":
		case "October":
		case "November":
			return "Spring";
			break;
		
		default:
			return "Invalid Season!";
			break;
	}
};

console.log(Seasons_of_the_Year("July"));
console.log(Seasons_of_the_Year("December"));