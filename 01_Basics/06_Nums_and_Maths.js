const score = 100
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const Num = 23.8966
const Num1 = 123.8966
const Num2 = 1123.8966
// console.log(Num.toPrecision(3)); 
// console.log(Num1.toPrecision(3)); 
// console.log(Num1.toPrecision(4)); 
// console.log(Num2.toPrecision(3)); 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));


//******************************** Maths ********************************//
//Maths is Library in Javascript which has many functions

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.min(6,2,8,1));
// console.log(Math.max(6,2,8,1));

console.log(Math.random());  //Returns any random value between 0-1(0 inclusive and 1 exlusive)
console.log((Math.random()*10) + 1); //Here the Min value will be 1
console.log(Math.floor(Math.random()*10) + 1); //This will generate only Integer values between 1 and 10(both inclusive)

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min)) + 1) + min); //Values between 11-20 (Both inclusive)