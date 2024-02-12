//2 ways to create an object - By Literals and by Constructors

//Singleton - creating an object with the help of a constructor

// Object.create


//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ashutosh",
    "full name": "Ashutosh Tripathi",
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "Ashutosh@google.com",
    isLoggedIn: false,
    LoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);    //In Memory, keys are stored as string
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Ashutosh@gmail.com"
// Object.freeze(JsUser)   //Now the values of this object cannot be changes
JsUser.email = "Ashutosh@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greeting2());