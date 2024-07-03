//  Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.


let Arrow_func_compared_to_traditional_func = {
	name: "Janifer",
	nationality: "England",
	// This is an traditional_function
	details: function() {
		console.log(this.name + " " + this.nationality);
	},

	// This is an Arrow function

	arrow_function : () => {
		console.log(Arrow_func_compared_to_traditional_func.name);
	},
};


Arrow_func_compared_to_traditional_func.details();
Arrow_func_compared_to_traditional_func.arrow_function();


