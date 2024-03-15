// let isRaining: boolean = false;

import { Console } from "console";

// if (isRaining) {
//     console.log("ghar par rahain")
// } else {
//     console.log("barish enjoy karain");
// }

let physicsMarks: number = 80;
let chemistryMarks: number = 75;
let mathMarks: number = 90;

let totalMarks: number = 300;
let obtainedMarks: number = physicsMarks+chemistryMarks+mathMarks;
let percentage:number = (obtainedMarks/totalMarks)*100;

console.log("MarksSheet:");
console.log("physics Marks:", physicsMarks);
console.log("ChemistryMarks:", chemistryMarks);
console.log("Maths Marks:", mathMarks);
console.log("total Marks:", totalMarks);
console.log("Obtain Marks:", obtainedMarks),
console.log("Percentage:", percentage.toFixed(2)+ "%");

if (percentage >=80) {
    console.log("Grade A+");
} else if (percentage >=70) {
    console.log("Grade A");
} else if (percentage >=60) {
    console.log("Grade B");
} else if (percentage >=50) {
    console.log("Grade C");
} else {
    console.log("fail")
}          