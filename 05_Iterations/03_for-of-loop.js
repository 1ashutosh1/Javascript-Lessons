// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet === " ")        //This ensures that space is not printed
    continue
    // console.log(`Each char is ${greet}`);
}









/*********************************************** MAP ****************************************/
// Map stores (key,value) pair in the exact same order as they are inserted in a map and all the keys are unique

const map = new Map()           //Creates a Map
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")
map.set('IN',"India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObj = {
    game1: 'NFS',
    game2: 'Assassins Creed',
    game3: 'GTA'
}

// for (const [key, value] of myObj) {                 //for of loop cannot be used to iterate on objects
//     console.log(key, ':-', value);
// }