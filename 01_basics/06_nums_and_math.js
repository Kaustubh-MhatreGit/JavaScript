/////////////////////////////NUMBER//////////////////////////////

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

////////////////////////FIXED/////////////////////////////

console.log( balance.toString().length);
console.log(balance.toFixed(2));

///////////////////////Precision/////////////////////////

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3));

//////////////LocalString => Add Commas ////////////////////////////

const otherNumber3 = 10000000000000
console.log(otherNumber3.toLocaleString());// US STANDARDS

const otherNumber4 = 10000000000000
console.log(otherNumber4.toLocaleString('en-IN'));// INDIAN STANDARD


//////////////////////////////MATHS///////////////////////////////////

console.log(Math);
console.log(Math.abs(-4)); // convert negative to positive

console.log(Math.round(4.3)); // give round value
console.log(Math.round(4.6)); // give round value

console.log(Math.ceil(4.1)); // give top value
console.log(Math.floor(4.9)); // give top value

console.log(Math.min(1, 5, 9 ,4)); // give min value
console.log(Math.max(1, 5, 9 ,4)); // give max value

console.log(Math.random());// gives random value from 0 to 1
console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);























