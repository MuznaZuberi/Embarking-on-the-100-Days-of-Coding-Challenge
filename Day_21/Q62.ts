// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.


interface Student_01 {
	s1_name: string;
	s1_age: number;
	s1_courses: string[];
};



interface Student_02 {
	s2_name: string;
	s2_age: number;
	s2_courses: string[];
};



interface Student_03 {
	s3_name: string;
	s3_age: number;
	s3_courses: string[];
};



type All_Stu = Student_01 & Student_02 & Student_03;

let All_Students_Data: All_Stu = {
	s1_name: "Peter",
	s1_age: 11,
	s1_courses: ["English" , "Maths" , "Urdu"],
	s2_name: "Janifer",
	s2_age: 14,
	s2_courses: ["Urdu" , "English" , "Maths"],
	s3_name: "Herry",
	s3_age: 17,
	s3_courses: ["Maths" , "Urdu" , "English"],
};

console.log("All_Students_Data : ", All_Students_Data);
