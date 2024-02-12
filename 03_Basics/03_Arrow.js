const user = {
    username: "Ashutosh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);       /* "this" is used for current context(values) */
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
 
// console.log(this);          //It gives an empty object as output because there is no object currently in the global scope

//In, Browser there is a global object called window object so it does not give an empty object when we use "this" in console.log(this) on Browser, instead it gives a window object.




/********************************************** ARROW FUNCION *******************************************/


// function chai(){
//     let username = "Ashutosh"
//     console.log(this.username);             //"this.something" only works with objects
// }

// chai()


// const chai = function(){
//     let username = "Ashutosh"
//     console.log(this);                //It gives a global object as output along with different properties that we can use
// }




const chai = () => {
    let username = "Ashutosh"               
    console.log(this);               //It gives an empty object as output                    
}
//  This is Arrow function where we don't use the function keyword, directly use the parameters and then arrow and then start the function body

// chai()


// const addTwo = (num1,num2) => {
//   return num1 + num2
// }

const addTwo = (num1,num2) => (num1 + num2)
//This is known as implicit return arrow function, because it assumes a return statement because there is only a single line in body. You can use () to wrap that single line but dont use { } because a return statement is always required with { }.

console.log(addTwo(3,4));



const display = () => ({username: "Ashutosh"})     //Returning an Object
console.log(display())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function() {})