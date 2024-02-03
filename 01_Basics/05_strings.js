const name = "Ashutosh"
const repoCount = 25

// console.log(name + repoCount + " Value");   //This is an old way of concantenating strings

console.log(`Hello my Name is ${name} and my repo Count is ${repoCount}`); //This is a modern way for concatenation

const gameName = new String("Ashutosh")
// console.log(gameName[0]);
// console.log(gameName.__proto__); //Although output gives an empty object but it is not empty object it contains everything

// console.log(gameName.length)
// console.log(gameName.toUpperCase()); //Here the original value of gameName is still unchanged

console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newgameName = gameName.substring(0,4)
console.log(newgameName);

const anotherGame = gameName.slice(-6,4)    //in case of negative index, it is (negative index + string length) so here it is from -6+8 = 2 to 4th index and we get hu as output
console.log(anotherGame);


const newStringOne = "    Ashutosh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashutosh.com//ashutosh%20tripathi"

console.log(url.replace('%20', '-'))

console.log(url.includes('ashutosh'))

const newName = new String("Ashutosh-Tri-com")

console.log(newName.split('-'));