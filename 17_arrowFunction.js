// this keyword is used to make current context
//  only used in objects 

// const user = {
//     username: "Rishav",
//     price: 890,

//     welcomeMessage: function(){
//         console.log(`Hey ${this.username}, Welcome to our website`);
//     }
// }

// user.welcomeMessage()
// user.username = "Rox"
// user.welcomeMessage()

// console.log(this); 


// function coffee(){
//     let username = "Rishav"
//     console.log(this.username);
// }
// coffee()


// const coffee = function(){
//     let username = "Rishav"
//     console.log(this.username);
// }
// coffee()


// Arrow Functions

// const coffee = () => {
//     let username = "Rishav"
//     console.log(this);
// }
// coffee()


// const addone = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addone(8,9))



//Implicit return for one line of arrow functions
// In implicit return we doesn't need to involve curly braces and return

// const addone = (num1 , num2) => num1 + num2
// console.log(addone(8,9))



// implicit function for objects we use parenthesis
const addone = () => ({username: "Rishav"})
console.log(addone())

