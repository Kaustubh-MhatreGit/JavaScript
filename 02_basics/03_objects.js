// Singleton- only through constructor not through laterals

// OBJECT LITERALS

const mySym = Symbol("key1") // This is Symbol dataType

const JsUser = {
    name : "Kaustubh",
    "full name" : "Kaustubh Mhatre",
    [mySym] : "key21", //Symbol
    age : 22,
    location : "Maharashtra",
    email : "kaustubhcet2020@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "saturday"]
}

console.log(JsUser.email); // not much professional // we cannot access full name through this method
console.log(JsUser["email"]); // Professional for object
console.log(JsUser["full name"]);
// console.log(JsUser.Full name);// showing error

// NOTE : All keys are considered as string automaticaly

console.log(JsUser[mySym]);// no need to add ""

JsUser.email = "mhatre@gmail.com"
console.log(JsUser);

// Object.freeze(JsUser) // now we cant change the values in the object its freezed
JsUser.age = 12
console.log(JsUser);// age didnt changed due to freeze


JsUser.greeting = function() {
    console.log("HELLO JS USER");
}
console.log(JsUser.greeting);

JsUser.greeting2 = function() {
    console.log(`HELLO JS USER, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

