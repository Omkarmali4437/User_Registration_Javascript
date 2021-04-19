const REGEXNAME = new RegExp("[A-Z]{1}[a-z]{2,}");

console.log("Welcome to User Reegistration Problem");

var string = require("readline-sync");
var firstname = string.question("Enter you First Name: ");

if(REGEXNAME.test(firstname)){
    console.log("You have entered your first-name correctly "+firstname);
}else{
    console.log("Re-enter your first-name correctly");
}

var lastname = string.question("Enter your Last Name: ");

if(REGEXNAME.test(lastname)){
    console.log("You have entered your last-name correctly "+lastname);
}else{
    console.log("Re-enter your last-name correctly");
}