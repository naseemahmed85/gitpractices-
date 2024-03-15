//This code calculate percentages for 5 subjects
//Subject : math, physics, chemistry, english, biology

//user detail
let userid = "N13685"

//total max marks
let totalmarks = 500

//student marks
let mathscore = 85
let physicsscore = 97
let chemistryscore = 35
let englishscore = 55
let biologyscore = 77

let finalresult =((mathscore + physicsscore + chemistryscore + englishscore + biologyscore )/totalmarks)*100

let resultstatement = "student" +" "+ userid +" "+ "obtaind this percentage :" + finalresult + "%"

console.log(resultstatement)

//student N13685 obtained the percentage : 69.8%

let grade1 = finalresult > 90
console.log("grade1 : ",grade1)
let grade2 = finalresult > 80
console.log("grade2 : ",grade2)
let grade3 = finalresult > 70
console.log("grade3 : ",grade3)
let grade4 = finalresult > 60
console.log("grade4 : ",grade4)

