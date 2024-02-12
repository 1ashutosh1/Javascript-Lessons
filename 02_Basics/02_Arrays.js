const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Batman", "Flash"]

// marvel.push(dc)

// console.log(marvel);  //The entire dc array is considered as an element in the marvel array
// console.log(marvel[3][1]);
 
// const allHeroes = marvel.concat(dc)
// console.log(allHeroes);
 
const allnewHeroes = [...marvel, ...dc]    //Spread function
// console.log(allnewHeroes)

const anotherarray = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Ashutosh")) //Checks whether given Input is Array or Not
console.log(Array.from("Ashutosh"))  //Converts the input to array

console.log(Array.from({name: "Ashutosh"}));  //Interviews

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));