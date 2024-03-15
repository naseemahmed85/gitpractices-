// let isRaining: boolean = false;
// if (isRaining) {
//     console.log("ghar par rahain")
// } else {
//     console.log("barish enjoy karain");
// }
let physicsMarks = 80;
let chemistryMarks = 75;
let mathMarks = 90;
let totalMarks = 300;
let obtainedMarks = physicsMarks + chemistryMarks + mathMarks;
let percentage = (obtainedMarks / totalMarks) * 100;
console.log("MarksSheet:");
console.log("physics Marks:", physicsMarks);
console.log("ChemistryMarks:", chemistryMarks);
console.log("Maths Marks:", mathMarks);
console.log("total Marks:", totalMarks);
console.log("Obtain Marks:", obtainedMarks),
    console.log("Percentage:", percentage.toFixed(2) + "%");
if (percentage >= 80) {
    console.log("Grade A+");
}
else if (percentage >= 70) {
    console.log("Grade A");
}
else if (percentage >= 60) {
    console.log("Grade B");
}
else if (percentage >= 50) {
    console.log("Grade C");
}
else {
    console.log("fail");
}
export {};
