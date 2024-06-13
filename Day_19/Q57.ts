//   Question 57: Calculate the average grade: Calculate the average grade according to the list of grades.

let grades: number[] = [71, 89, 91, 99, 99.1, 99.9];

let avg_grade: number = grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log("Avg_Grade : ", avg_grade);