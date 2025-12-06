//OBJECT
const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);



//FUNCTION

// function chaiii(){
//     console.log(this);  
// }
// chaiii() 


// function chai(){
//     let username = "mha"
//     console.log(this.username);
    
// }
// chai()  //undefined


// function code() {
//     let username = "kaus"
//     console.log(`${this.username}`);
// }
// code()  //undefined

/////////////////////////////////////////////////////

// const chai = () => {
//     let username = "kaustubh"
//     console.log(this);
    
// }
// chai()

////////////////////////////////////////////////
//EXPLICITE RETURN

// const addTwo = (num1, num2) => {
//      return num1 + num2
// console.log(addTwo(5,6));



////////////////////////////////////////////////
/////implicite return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(5,6));

// const addTwo1 = (num1, num2) => (num1 + num2)
// console.log(addTwo1(5,6));

// const addTwo2 = (num1, num2) => ({username : 
//     "hitesh"}) // {} is important to return object
// console.log(addTwo2());





