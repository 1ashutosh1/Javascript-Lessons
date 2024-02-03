// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "Ashutosh"

// console.log(typeof score);           
// console.log(typeof(score));

/* typeof can be used as a function or as an operator, it doesn't matter as in line 3 and 4*/

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/*
 "33" => 33
 "33abc" => NaN(Not a Number)
 true => 1; false => 0
 null => 0
 undefined => NaN
 "Ashutosh" => NaN
*/


let isLoggedIn = "Ashutosh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


/* 
 1 => true; 0 => false
 "" => false
 "Ashutosh" => true
*/


let num = 33
let stringNumber = String(num);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ***************** Operations ********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2**3);
// console.log(3/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Ashutosh"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); 
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + "2" + 1);
/* All of these are first converted to strings and then added */

// console.log(1 + 2 + "2");


// console.log(3 + 4 * 5 % 3);
/* If the first item is a string then all of the items are converted to string and added
If the first item is a no then first all the numbers are added(which are not string) and then added to the string number*/

//Avoid writing confusing code as it is not appreciated in big Organisations you should try to write code that is easy to read and use Parenthesis if there is a complex statement



// console.log(+true); 
// console.log(+"");

//Again confusing code avoid this because this has """NO REAL LIFE APPLICATIONS""".

let num1,num2,num3

num1 = num2 = num3 = 2 + 2
let gameCounter = 100
console.log(gameCounter++);
console.log(++gameCounter);

gameCounter = 100
gameCounter++
console.log(gameCounter);