//  Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

let Nested_Func_Obj = {
	country : "Malaysia",
	outer(){
		console.log(this.country);
		let nested_func = ()=>{
			console.log(this.country);
		}
		nested_func();
	}

}

Nested_Func_Obj.outer();