//  Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.


export class Teacher_Bio {
	Teacher_name: string;
	constructor(Teacher_name : string){
		this.Teacher_name = Teacher_name;
	}
	func(){
		return this.Teacher_name;
	}
}

let result = new Teacher_Bio("Janifer");
