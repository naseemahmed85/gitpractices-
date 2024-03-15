// //Arithmetic operators
// import inquirer from "inquirer"
// let x: number = 10
// let y: number = 5
// let sum: number = x+y
// console.log(sum)
//Assignment operators
// let x: number = 10
// let y: number = 5
// x += y      //  x = x+y     // 15
// y += x      //  y = y+x     // 5
// console.log(y)
// //String Operators
// let msg: string = "hello" + " " + "world"
// console.log(msg)
//Logical operators
//Library 
// let isBookAvailable: boolean = true
// let userBorrowedBooks: number = 2
// const maxAllowedBooks: number = 3
// if (isBookAvailable && userBorrowedBooks < maxAllowedBooks) {
//     console.log("ap book borrow karsaktay hain!")
// } else {
//     console.log("ap book borrow nahin karsakty")
// }
//Online shoping webside development 
let hasCouponCode = false;
let orderAmmount = 1900;
let isMember = true;
if (hasCouponCode || (orderAmmount < 1000 && isMember)) {
    console.log("Apko discount milgaya hy");
}
else {
    console.log("Apko discount nahin mil sakta");
}
export {};
