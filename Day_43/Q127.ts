// Traditional Function Expression 

let Function_expression = function  (First_name: string , Last_name: string):string{
	return First_name + " " + Last_name;
}

let res = Function_expression("Muzna" , "Amir");
console.log("Function_expression : " , res);



//  Arrow Function

let Arrow_function = (num1 :number , num2 :number) :number => {
	return num1 + num2;
}

let Result = Arrow_function(10,20);
console.log("Addition : " , Result );
