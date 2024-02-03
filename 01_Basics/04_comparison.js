// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

/* try to convert values of same datatype only as the result of different datatypes are unpredictable Although Javascript converts different datatypes into preffered type for comparison */

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* these statements give different output because the equality(==) and comparisons(< > >= <=) operate differently the comparisons first convert the null to a number and then compare while equality compares directly */

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);




// ******************** === check ************************/
// === means strict check it checks values and also its datatype

console.log("2" == 2);   // "2" is converted to 2 and then checked
console.log("2" === 2);  //datatype is not same