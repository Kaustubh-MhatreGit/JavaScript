// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");


function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }


// addTwoNumbers(3 , 5)
//  const result = addTwoNumbers(3 , 5)
//  console.log(result);

//  function addTwoNumbers(number1, number2){
//     // let result = number1 + number2
//     // return result 
//     return number1 + number2
// }
// const result = addTwoNumbers(3,5)
// console.log(result);

/////////////////////////////////////////////////////////////////////////

// function loginUserMessage(username = "sam"){
function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kaustubh"))
console.log(loginUserMessage())

////////////////////////////////////////////////////////////////////



