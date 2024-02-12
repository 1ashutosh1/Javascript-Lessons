// var c = 300

let a = 557
if(true){
    let a = 10
    const b = 20
    // console.log("Inner let varible is ", a);
}


// console.log("Outer let variable is ", a);
// console.log(b);
// console.log(c);

/* So we will try to never Use var again because it has global scope and any change anywhere in the program can cause a lot of problems especially if it is a group project*/






/********************************************** Scope Level ********************************************************/



function one(){
  const username = "Ashutosh"

  function two(){
     const website = "youtube"
     console.log(username);
  }
//   console.log(website);        //This is error!!!!
 
  two()
}

// one()


/* Closure is when there are nested functions and the inner function can access the variables of outer function */

if(true){
  const username = "Ashutosh"
  if(username === "Ashutosh"){
    const website = " Youtube"
    // console.log(username + website);
  }
}


/*************************** Interesting *************************/

console.log(addOne(5));

function addOne(num){
    return num + 1
}


console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}


/* Two different ways of using functions */