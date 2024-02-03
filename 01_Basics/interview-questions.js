/*********************** INTERVIEW QUESTIONS ***********************/


/* JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them */

/*Dynamically typed languages are less secure then statically typed languages since if the variables are not handled carefully might lead to potential errors*/

//Two types or categorisation of datatypes based on the way they are stored and accesed from the Memory

/******************* Primitive(Call by Value Type) ******************/

//7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.53

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 345674563647374646n

/******************* Non-Primitive(Reference Type) *******************/

//3 Types: Array, Object, Functions

const heroes = ["IronMan", "BatMan", "Thor"]    //Array

let myObj = {                   //myObj is an Object
    name: "Ashutosh",
    age: 21,
}


const myFunc = function(){
    console.log("Hello World"); 
}

// console.log(typeof bigNumber);
// console.log(typeof myFunc);
// console.log(typeof heroes);
// console.log(typeof myObj);
// console.log(typeof );





// ******************************************************************************************************************************

// Memory is of two Types:
// 1> Stack(For Primitive Datatypes)
// 2> Heap(For Non-primitive Datatypes)

let myname = "Draider"
let anotherName = myname
anotherName = "PussyMagnet"

console.log(myname);
console.log(anotherName);

let userOne = {
  email: "Ashutosh@gmail.com",
  upi: "sbi@ybl",
}

let userTwo = userOne

userTwo.email = "Tripathi@google.com"
console.log(userOne.email);
console.log(userTwo.email);z