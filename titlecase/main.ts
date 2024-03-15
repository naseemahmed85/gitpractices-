let sentence: string = "I am learning typescript"

//lowercase
let lowercaseName: string = sentence.toLowerCase();
console.log(lowercaseName);

//Upparcase
let uppercaseName:string = sentence.toUpperCase();
console.log(uppercaseName);

// titlecase
//step 1
let words:string[]= sentence.split(" ");
// console.log(words);

//step 2
let titlecaseName:string = ""

//step 3

for (let i = 0; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() + " "
}

console.log(titlecaseName)