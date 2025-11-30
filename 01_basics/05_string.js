const name = "Kaustubh"
const repo = 50
console.log(name + repo + "value");  // old way

console.log(`Hello my name is ${name} and my repo count is ${repo}`); // modern way

const gameName = new String("Kaustubh")
console.log(gameName); // more way to create a string with key value pair

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newGame = new String("mhatre-hs")
console.log(newGame);
console.log(newGame.substring(0,2)); // no negative value

const anotherString = newGame.slice(-9,3)
console.log(anotherString);// can use negative value

const newStringOne = "     hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim start as well end
console.log(newStringOne.trimStart());// only trim start
console.log(newStringOne.trimEnd());//only trim end

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url);
url.replace("%20","-")
console.log(url.replace("%20","-"));// replace
console.log(url.includes("kaustubh"));// to check of the given char is available or not
console.log(url.includes("https"));

const string = new String("kaustubh is a great man")
console.log(string.split(" "));
console.log(string.split(""));






    







