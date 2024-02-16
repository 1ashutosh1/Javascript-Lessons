//1st
const promiseOne = new Promise(function(resolve, reject){
    //Do any asynchronous task like DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is Complete');
        resolve();   //to connect resolve with .then 
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})



//2nd
new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log("Async Task 2");
     resolve();
    },1000)

}).then(function(){
    console.log("Async Task 2 resolved");
})





//3rd
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
   console.log(user);   
})




//4th
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
           resolve({username: "Ashutosh", password: "123"})
        } else{
           reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
  console.log(user);
  return user.username;
}).then((username)=>{
   console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("Promise is either resolved or rejected"))





/********************************* async and await ***********************************************/


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
           resolve({username: "Javascript", password: "123"})
        } else{
           reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); //API call takes time
//         const data = await response.json(); //conversion to JSON also takes time so we need to use await
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
  
// }

// getAllUsers();



fetch("https://api.github.com/users/1ashutosh1")
.then( (response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch( (error) => console.log(error))


