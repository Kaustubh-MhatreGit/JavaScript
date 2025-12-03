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

// function calculateCartPrice(...num1){   use alternate
function calculateCartPrice(val1, val2, ...num1){
     return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));

/////////////////////////////////////////////////////////////

const user ={
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)     //switch alternate

// handleObject({
//     username : "sam",
//     price : 99
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));




