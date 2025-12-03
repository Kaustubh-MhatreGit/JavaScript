const tinderUser = new Object() // constructor method
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        useerfullname : {
            firstname : "Kaustubh",
            lastname : "mhatre"
        
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.useerfullname.firstname);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

// COMBINE OBJECTS //

const obj3 = { obj1 , obj2 }
console.log(obj3);

const obj4 = Object.assign(obj1 , obj2)
console.log(obj4);
console.log(obj4===obj1);

const obj5 = Object.assign({}, obj1 , obj2)
console.log(obj5);

console.log(obj5===obj1);

// SPREAD

const obj6 = {...obj1, ...obj2} //90% time we use this for combining
console.log(obj6);

// Array Of Objects
const User = [
    {
        id : 1,
        age : 21
    },
    {
        id : 2,
        age : 22
    },
    {
        id : 3,
        age : 23
    },
    {
        id : 4,
        age : 24
    }
]

console.log(User[1].age);

///////////////////////////////////////

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLoggedOut"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInst : "hitesh"
}

const {courseInst} = course
console.log(courseInst);

const {courseInst: con} = course
console.log(con);

///////////////////API CONCEPT///////////////////////////

// {
//     "name" : "nitesh",
//     "coursename" : "js in hindi",  //json data
//     "price" : "free"
// }


[
    {},
    {},
    {}
]




