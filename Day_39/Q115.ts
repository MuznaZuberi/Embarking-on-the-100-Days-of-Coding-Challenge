
function Switch_Statement(a:number):void{
	switch (a) {
		case 1:
			console.log("Monday");
			      break;


			case 2:
			console.log("Tuesday");
                  break;
 
			case 3:
			console.log("Wednesday");
                  break;

			case 4:
			console.log("Thursday");
                      break;
 
			case 5:
			console.log("Friday");

                       break;

			case 6:
			console.log("Saturday");
                             break;

			case 7:
			console.log("Sunday");
                             break;
		
		default:
			console.log("Invalid numb!");
			break;
	}
};

Switch_Statement(7);
Switch_Statement(3);
Switch_Statement(10);
