const user = {
    username: "Ashutosh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from Database");
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




/********************************* Constructors *******************************/

// const promiseOne = new Promise()
// const date = new Date()

// new keyword is a constructor function. Means that we can create multiple instances of same Object


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Ashutosh", 12, true);
const userTwo = new User("Chai Aur Code",11,false);
console.log(userOne.constructor);
// console.log(userTwo);

/* Whenever You Use 'new' keyword
// Step 1: An empty Object is created known as instance
// Step 2: A Constructor function is called and it provides all the values(from the arguments) in the empty Object
// Step 3: You get all the values in the object whenever it is used 
*/
