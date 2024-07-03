let func_obj = {
	name: "Zimal Khan",
	age: 22,
	developer: true,
	details: function(){
		return this. name ;
	},
};
console.log(func_obj.details());
