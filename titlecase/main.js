let sentence = "I am learning typescript";
//lowercase
let lowercaseName = sentence.toLowerCase();
console.log(lowercaseName);
//Upparcase
let uppercaseName = sentence.toUpperCase();
console.log(uppercaseName);
// titlecase
//step 1
let words = sentence.split(" ");
// console.log(words);
//step 2
let titlecaseName = "";
//step 3
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
export {};
