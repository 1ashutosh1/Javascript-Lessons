// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate = new Date()
// console.log(myDate);

// We can use various methods to convert this date into more readable value.
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// const myCreatedDate = new Date(2023, 0, 23);
// const myCreatedDate = new Date(2023, 0, 23, 5, 3);
const myCreatedDate = new Date("01-26-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //Time in seconds since 1st Jan 1970 12:00:00 AM


const newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); //Day starts from 1(Monday)

// `${newDate.getDay()} and the time is`


newDate.toLocaleString('default',{         //toLocaleString is customisable to display date according to the format specified by you
    weekday: "long", 
})