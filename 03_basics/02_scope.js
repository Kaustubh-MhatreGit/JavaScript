// // const b = 300

// // if(true){
// //     let a = 10;
// //     const b = 20;
// //     console.log(b);     
// // }
// // console.log(b);

// ////////////////NESTED SCOPE////////////////////
// // function one(){
// //     const username = "Hitesh"

// //     function two() {
// //         const website = "Youtube"
// //         console.log(username);   
// //     }

// //     // console.log(website);

// //     two()

// // }
// // one()

// /////////////////////////IF ELSE//////////////
// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = "youtube"
//         console.log(username + website);

//     }
//     // console.log(website);  error
// }
// // console.log(username);  error



//////////////////INTERESTING///////////////////
///////////////HOISTING/////////////////////
console.log(addone(6));
function addone(num){
    return num + 1
}


console.log(addTwo(6));
const addTwo = function(num){
    return num + 2
}





