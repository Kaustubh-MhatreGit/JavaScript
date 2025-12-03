const myArr = [0, 1, 2, 3, 4, 5] //1st Way
const myHeroes = ["shaktiman", "naagaraj"]
const myArr2 = new Array(1,2,3,4,5) // 2nd Way

console.log(myArr[1]);
console.log(myArr.length);
console.table([myArr, myArr2, myHeroes])

//Array Methods
//PUSH

myArr.push(6)
console.log(myArr);

//POP

myArr.pop()
console.log(myArr);

// SHIFT AND UNSHIFT

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

// INCLUDES

console.log(myArr.includes(9));
console.log(myArr.includes(4));

// INDEXOF

console.log(myArr.indexOf(1));
console.log(myArr.indexOf(9));

// JOIN

const newArr = myArr.join()//joins but convert it to the string
console.log(myArr);
console.log(newArr);
console.log(typeof myArr);
console.log(typeof newArr);

// SLICE and SPLICE (IMP FOR  INTERVIEW)

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c" ,myArr);


















