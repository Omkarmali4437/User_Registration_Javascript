const REGEXNAME = new RegExp("[A-Z]{1}[a-z]{2,}");

console.log("Welcome to User Reegistration Problem");

var digit = require("readline-sync");
var firstname = digit.question("Enter you First Name: ");

if(REGEXNAME.test(firstname)){
    console.log("You have entered your first-name correctly");
}else{
    console.log("Re-enter your first-name correctly");
}