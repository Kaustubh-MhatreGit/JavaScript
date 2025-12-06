// Immediately Invoked Function Expression (IIFE)
// NORMAL WAY
// function chai(){
//     console.log("DB CONNECTED");
    
// }
// chai()


// IIFE WAY Syntax: ()()
(function chai(){
    console.log("DB CONNECTED");
})(); // " ; "  is very important...next function wont work without using of ; since js dont know when to end the previous function

(function chai1(){
    console.log("DB CONNECTED");
})();

(() => {
    console.log(`DB CONNECTED`); // IIFE using arrow function
    
})();


((name) => {
    console.log(`DB CONNECTED ${name}`); // IIFE using arrow function
    
})("Kaustubh")


