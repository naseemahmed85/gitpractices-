//This code calculate percentages for 5 subjects
//Subject : math, physics, chemistry, english, biology
//user detail
var userid = "N13685";
//total max marks
var totalmarks = 500;
//student marks
var mathscore = 85;
var physicsscore = 97;
var chemistryscore = 35;
var englishscore = 55;
var biologyscore = 77;
var finalresult = ((mathscore + physicsscore + chemistryscore + englishscore + biologyscore) / totalmarks) * 100;
var resultstatement = "student" + " " + userid + " " + "obtaind this percentage :" + finalresult + "%";
console.log(resultstatement);
//student N13685 obtained the percentage : 69.8%
var grade1 = finalresult > 90;
console.log("grade1 : ", grade1);
var grade2 = finalresult > 80;
console.log("grade2 : ", grade2);
var grade3 = finalresult > 70;
console.log("grade3 : ", grade3);
var grade4 = finalresult > 60;
console.log("grade4 : ", grade4);
