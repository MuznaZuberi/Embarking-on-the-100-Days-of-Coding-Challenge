//  Question 53: Pulling Apart aNested Object: Suppose you've got a list in another list that shows what the computer programmer knows, such as code languages, tools and software frameworks. From this list, discover a way to acquire 3 special skills and show them.


let Programming = {
	Programming_High_languages: ["Python", "PHP", "JavaScript"],
	Development_Tools: ["Docker", "Kubernetes", "Git"],
	Software_Frameworks: ["Laravel (PHP)", "Django (Python)", "Angular (JavaScript)"],
};

let {Programming_High_languages, Development_Tools, Software_Frameworks} = Programming;

console.log(`Programming_High_languages : ${Programming_High_languages[1]} , Development_Tools: ${Development_Tools[1]} ,  Software_Frameworks: ${Software_Frameworks[1]}`);



