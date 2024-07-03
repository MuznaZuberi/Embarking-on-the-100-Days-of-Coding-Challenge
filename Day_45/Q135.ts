//  Question 135: Explain how you can format a JSON string with proper indentation for readability.


let My_bio = {
	my_name: "Zimal Khan",
	age: 27,
	isDeveloper: true,
	country : "Pakistan",
};

console.log(JSON.stringify(My_bio , null ,  2 ));





// Output

/* {                                                                                                                                           
  "my_name": "Zimal Khan",                                                                                                                  
  "age": 27,                                                                                                                                
  "isDeveloper": true                                                                                                                       
}  */ 

