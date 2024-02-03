const accountId = 144545    //Means that it is now a constant value and cannot be changed
let accountEmail = "ashutosh@google.com"  
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2   //not allowed
accountEmail = "at@at.com"
accountPassword = "213213"
accountCity = "Delhi"
console.log(accountId);
/*
 Semicolon is not compulsory you can use it or don't use it.
 Try Not to use var for declaring varibles because it has many problems with block scope and functional scope
 Instead use let for declaring variables
 Also try not using any variable without any defined datatype (like in line No. 4).Although it works but is not recommended
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
