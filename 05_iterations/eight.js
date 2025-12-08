// REDUCE

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`); 
//     return acc + currval
// }, 0)
// console.log(myTotal);


// const myTotal = myNums.reduce( (acc, currval) => (acc + currval) , 0)
// console.log(myTotal);


// const number = [245, 889, 639, 784, 569]
// const num = number.reduce((acc, curr) => acc + curr, 0)
// console.log(num);


const shoppingCart = [
    {
        itemName : "js course",
        price : 299
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "dev course",
        price : 2999
    },
    {
        itemName : "data course",
        price : 12999
    },
]

const s = shoppingCart.map( (num) => num.price ).reduce( (acc,cur) => acc + cur , 0)
console.log(s); //we used chaining here(done by me)

const n = shoppingCart.reduce( (acc,item) => (acc + item.price),0)
console.log(n); // pure reduce






