// // const userEmail = "h@hitesh.ai"
// // const userEmail = ""
// const userEmail = []

// if(userEmail) { //here it is considered usermail is true always since no comparison
//     console.log("GOT USER EMAIL");
    
// }else{
//     console.log("DONT HAVE USER EMAIL");
   
// }

// // falsy values

// // 1. false
// // 2. 0
// // 3. -0
// // 4. Bigint 0n
// // 5. null
// // 6. undefined
// // 7. Nan

// // truthy values

// // 1. "0"
// // 2. "false"
// // 3. " "
// // 4. []
// // 5. {}
// // 6. function()


// if (userEmail.length === 0){
//     console.log("Array is empty");   
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////

// const emptyobj = {
//     username: "kaustubh",
//     age : 21
// }
// if(Object.keys(emptyobj).length===0){
//     console.log("Object is empty");   
// } else {
//     console.log("object is full");
    
// }


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? null ?? 10 ?? 15
console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice > 80 ? console.log("true") : console.log("false");



