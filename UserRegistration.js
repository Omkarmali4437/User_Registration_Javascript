const REGEXNAME = new RegExp("[A-Z]{1}[a-z]{2,}");
const REGEXEMAIL = new RegExp("^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$");

console.log("Welcome to User Reegistration Problem");

var string = require("readline-sync");
var firstname = string.question("Enter you First Name: ");

if(REGEXNAME.test(firstname)){
    console.log("You have entered your first-name correctly "+firstname+"\n");
}else{
    console.log("Re-enter your first-name correctly \n");
}

var lastname = string.question("Enter your Last Name: ");

if(REGEXNAME.test(lastname)){
    console.log("You have entered your last-name correctly "+lastname+"\n");
}else{
    console.log("Re-enter your last-name correctly \n");
}

var email = string.question("Enter your email address: ");

if(REGEXEMAIL.test(email)){
    console.log("Your have entered valid email address: "+email+"\n");
}else{
    console.log("Please check your email address \n");
}