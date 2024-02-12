//Arrays

// const myArray = [5,6,8,9,11,"Ashutosh",true] //This is correct in JS

const myArr = [1,2,3,4,5]
// console.log(myArr[0]);

const Heroes = ["IronMan", "Batman", "Thor", "Captain America"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(Heroes[2]);



//Array Methods

// myArr.push(6)
// console.log(myArr);

// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

myArr.unshift(9)      //Insert any element at the start of Array so you need to shift all elements by 1 position so try not to use it
myArr.shift()    //Removes the element at the first position
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));   //since 9 is not present in the array so it returns -1

// console.log(myArr.indexOf(3));


// const newArr = myArr.join()  //converts all the array into a string where characters are separated by commas

// console.log(myArr);
// console.log(newArr);




//slice and splice

console.log("A ", myArr);

const myArrtemp = myArr.slice(1,3)    //returns a section from starting index till lastindex-1 Original Array stays same

console.log(myArrtemp);
console.log("B ", myArr);   

const myArrtemp2 = myArr.splice(1,3)  //returns a section from start index of length(given as 2nd param) and removes that section from the array

console.log(myArrtemp2)
console.log("C ", myArr);   