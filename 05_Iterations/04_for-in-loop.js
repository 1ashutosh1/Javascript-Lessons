const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}


//For-in Loop: For iteration on Objects we can use for-in loop.

for (const key in myObject) {
//   console.log(`${key} is the shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
  // console.log(key);
  // console.log(programming[key]);
}


/* For-in loop by default only prints the keys instead of values present on those keys, so for values we need to explicitly define it

It is generally used for iterating over the properties of an Object and not on Map because it won't produce any output*/



// const map = new Map()           //Creates a Map
// map.set('IN',"India")
// map.set('US',"United States of America")
// map.set('FR',"France")
// map.set('IN',"India")

// for (const key in map) {          
//  console.log(key);              //No output
// }