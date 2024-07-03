//  Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

let Another_fun_obj = {
	name: "Zimal Khan",
	age: 22,
	isDeveloper: true,
	country : "Pakistan",
	city : "Islamabad",
	details: function(){
		return this.name + "\n" + this.age + "\n" + this.isDeveloper + "\n" + this.city ;
	},
};
console.log(Another_fun_obj.details());
