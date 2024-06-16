function Current_Date():string{
	let date: Date = new Date();
	let Present_Date = date.getDate();
	let Present_Month = date.getMonth()+1;
	let Present_Year = date.getFullYear();
	return Present_Date + "-" + Present_Month + "-" + Present_Year; 
}

let result = Current_Date();
console.log("Current_Date : ", result);
