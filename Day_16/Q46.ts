//   Question 46: Improved laptop object: Create an object for a laptop that contains properties such as make, model, year, and method describe() to record a sentence about the laptop.

let Mac_Laptop: {
	make: string,
	model: string,
	year: number,
},

	mac_Laptop = {
		make: "Apple MacBook Pro",
		model: "MacBook 10,1",
		year: 2017,
		describe: function() {
			console.log(`Mac_Laptop maker : "${this.make}"  Mac_Laptop model : "${this.model}"   Mac_Laptop year :  ${this.year}`);
		}
	};

mac_Laptop.describe();	
