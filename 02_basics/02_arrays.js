const marvel_heroes = ["thor", "Ironman", "Spiderman"]

const dc_heroes = ["Superman", "FLash", "Batman"]

// PUSH

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes.length);
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][2]);

// CONCATE

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);
console.log(allHeroes.length);

// SPREAD

const allNewHeroes = [...marvel_heroes, ...dc_heroes,]
console.log(allNewHeroes);

// ARRAY IN ARRAY IN ARRAY
// FLAT

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

//CHECK ARRAY AND MAKE ARRAY
// ISARRAY
console.log(Array.isArray("KAUSTUBH"));

// FROM
console.log(Array.from("KAUSTUBH"));
console.log(Array.from({name:"kaustubh"})); //IMP REVISION FROM VIDEO 15 time from 13:20 

// OF

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






