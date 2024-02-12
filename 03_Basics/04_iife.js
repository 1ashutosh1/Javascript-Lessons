// Immediately Invoked Function Expression(IIFE)

// Avoiding Global Scope Pollution: Variables declared inside the IIFE are not added to the global scope. This helps in preventing naming conflicts with other scripts and libraries.




(function chai(){                     //This is a named IIFE
    console.log(`DB connected`);   
})();

//The first paranthesis is wrapped around the function and the second parenthesis is for the execution of the function
//This is the syntax for IIFE
//You should always end the IIFE by a semicolon otherwise it doesn't know the context when to run





( (name) => {
    console.log(`DB Connected Two ${name}`);
})("Ashutosh");

//This is IIFE usage with Arrow Function in which Arguments are also passed
