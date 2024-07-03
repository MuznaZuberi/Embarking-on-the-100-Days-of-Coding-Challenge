// Callback Function

function Call(num1:number , num2:number){
	console.log("Addition:" , num1 + num2);
}

// Named Function

function add(callback:(num1:number , num2:number)=>void):void{
	let num1 : number = 10;
	let num2 :number = 20;

	callback(num1,num2);
}

add(Call);
