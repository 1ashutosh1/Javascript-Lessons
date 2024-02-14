//In certain cases when there is no comparison in conditional statements, Js assumes some values as true(truthy) and others as false(falsy)


// const userEmail = "Ashutosh@Tripathi.com"
const userEmail = ""

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Didn't get user Email");
}



//Falsy values : false, 0, -0, 0n(BigInt), "", null, undefined, NaN 
//All other values except these are consider Truthy values

// Ex of Truthy values: "0", 'false', " ", [], {}, function() {}






// const myArr = []

// if(myArr.length === 0){
//     console.log("Array is empty");
// }





const emptyObj = {}
if(Object.keys(emptyObj).length === 0){                 //Object.keys(object_name) returns an array of keys of the object
 console.log("Object is empty");
}              





/********************************** Nullish Coalescing Operator(??) ********************************/

//We need to see this operator only on two keywords: null and undefined


let val;
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 15
// val = null ?? 10 ?? 15                        /* Here it takes the first valid value */
val = null ?? undefined                  /* Since both the values are useless so we take second value by default */


console.log(val);


/************************************** Ternary Operator *******************************************/

const TeaPrice = 100
TeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
