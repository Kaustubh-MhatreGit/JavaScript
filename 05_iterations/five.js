//FOR EACH

const coding = ["js", "ruby", "java", "pyhton", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

//////////////////////////////////////////

// coding.forEach( (item) => {
//     console.log(item);
    
// })

///////////////////////////////////////////

// function printMe( item ){
//     console.log(item);
// }

// coding.forEach(printMe)

///////////////////////////////////////////

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);

// } )

///////////////////////////////////////////

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} ) //USING FOR EACH

for (const [key] in myCoding) {
    console.log(`${myCoding[key].languageName}` );   
} // USING FOR IN
