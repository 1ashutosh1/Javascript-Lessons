// let myName = "Ashutosh   ";
// let myChannel = "Chai   ";

// // console.log(myName.length);
// console.log(myName.trueLength);





let myHeros = ["Thor", "IronMan"];

let heroPower = {
    thor: "Hammer",
    IronMan: "Suit",

    getIronPower: function(){
        console.log(`Power of IronMan is ${this.IronMan}`);
    }
}

Object.prototype.Ashutosh = function(){
    console.log(`Ashutosh is present in all Objects`);
}

Array.prototype.heyAshutosh = function(){
    console.log(`Hitesh says Hello`);
}
// heroPower.Ashutosh();
// myHeros.Ashutosh();
// myHeros.heyAshutosh();
// heroPower.heyAshutosh();




/********************************* Inheritance ***************************/

const User = {
  name: "chai",
  email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "JSAssignment",
    fullTime: true,
    __proto__: TeachingSupport                     //now TAsupport can access the properties of TeachingSupport
}


Teacher.__proto__ = User;                         //Teacher can Access the properties of User                


// However this approach(__proto__) is old and not used now.

//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);   //Now TeacherSupport has access to all properties of Teacher




//Create a function to remove all whitespaces from string

let anotherUserName = "ChaiAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"Hitesh".trueLength();
"iceTea".trueLength();

//Jisne call kia whi this hai