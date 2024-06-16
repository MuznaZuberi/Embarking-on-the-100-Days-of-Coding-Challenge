//  Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function Few_days_are_left_until_New_Year():number{
	let Current_Date = new Date();
	let Current_Year = new Date (Current_Date.getFullYear()+1,0,1);
	let Diif_In_Millsec = Current_Year.getTime() - Current_Date.getTime();
	let Days_until_newyear = Math.ceil(Diif_In_Millsec/(1000 * 60 * 60 * 24));
    return Days_until_newyear;
};

let res = Few_days_are_left_until_New_Year();
console.log(`There are ${res} until the NewYear!`);







