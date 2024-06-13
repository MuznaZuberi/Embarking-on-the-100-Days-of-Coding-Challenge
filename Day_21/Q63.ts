//  Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape_01 = {
	shape_of_circle: string,
	circle_radius: number,
};

type Shape_02 = {
	shape_of_rectangle: string,
	rectangle_width: number,
	rectangle_height: number,
};


let Circle: Shape_01 = {
	shape_of_circle: "Circle",
	circle_radius: 5,

};


let Rectangle: Shape_02 = {
	shape_of_rectangle: "Rectangle",
	rectangle_width: 10,
	rectangle_height: 20,

};


console.log("Circle : ", Circle);
console.log("\n");
console.log("Rectangle", Rectangle);


