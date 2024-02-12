// const tinderUser = new Object() 
const tinderUser = {}


/*Both line 1 and 2 can be used to declare an Object as both mean same thing however in line 1 it is a singleton Object while in line 2 it is not a singleton Object*/

tinderUser.id = "123abc" 
tinderUser.name = "Slim Shady"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
      userfullname: {
         firstname: "Ashutosh",
         lastname: "Tripathi"
      }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}   //spread
// console.log(obj3);


const users = [
     {
        id: 1,
        email: "john@gmail.com"
     },

     {
        id: 1,
        email: "john@gmail.com"
     },
     
     {
        id: 1,
        email: "john@gmail.com"
     },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));





/*******************************  Object De-structuring And JSON API Intro **********************************/

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course;     //de-structuring

// console.log(courseInstructor);
console.log(instructor);


/*********************************** API INTRODUCTION ********************************/

// JSON -> JavaScript Object Notation

// This is API in JSON Form

/*
{
    "name": "Hitesh",
    "coursename": "Javascript in Hindi",
    "price": "Free"
}
*/


//API in Array Form

[
    {},
    {},
    {}
]