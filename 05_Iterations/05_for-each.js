const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function(item) {                     //For callback function, we don't write the function's name
//   console.log(item);
} )      

/* in the above case, item takes different values of elements of array from starting index to last index */



coding.forEach((item) => {                       //Using Arrow function
//  console.log(item);
})




function printItem(item){
    console.log(item);
}


// coding.forEach(printItem)                //here only a reference to the function is given, It goes to the function declaration to execute it.



coding.forEach((item, index, arr)=>{
//    console.log(item, index, arr);
})



const myCoding = [                                                //Array of Objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
    
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
})



