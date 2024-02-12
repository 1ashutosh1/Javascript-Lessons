
function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("T");
    console.log("O");
    console.log("S");
    console.log("H");
}

// sayMyName //This is just a reference of the function
// sayMyName() //This is the execution of the function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)       //7
// addTwoNumbers(3,"4")     //34
// addTwoNumbers(3,null)    //3 

/*Since we have not checked the datatype of Arguments before adding them to kabhi kabhi problems ho sakti hai*/

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result:", result);


function loginUserMessage(username = "Sam"){
   if(!username){                            
    console.log("Please enter a username");
    return
   }
   return `${username} just logged in`
}

/*    "", undefined,null are by default assumed to be false in if else condition   */

// console.log(loginUserMessage("Ashutosh"));
// console.log(loginUserMessage(""));


// console.log(loginUserMessage());
// console.log(loginUserMessage(null));


// console.log(loginUserMessage());   //Default value of username is taken




// function calculateCartPrice(...num1){      //(...) is rest operator in this case because sometimes we don't know how many arguments will be there
//   return num1
// }

// console.log(calculateCartPrice(200,400,500,2000,100));

function calculateCartPrice(val1,val2,...num1){      
    return num1
}

//  console.log(calculateCartPrice(200,400,500,2000,100));



/////////////// With Objects /////////////////////////////
const user = {
    username: "Ashutosh",
    price: 1000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})





///////////////////   With Arrays //////////////////////////////
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));