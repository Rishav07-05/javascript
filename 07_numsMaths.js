// const score = 450
// console.log(score)

// const balance = new Number(450)
// console.log(balance)

// //built in function in numbers

// //converts into string and handy to use string functions
// console.log(balance.toString().length)

// //display the decimals comes after the number
// console.log(balance.toFixed(2))

// // Precise the value to the closest 
// const ohterNum = 23.4543
// console.log(ohterNum.toPrecision(3));

// //visualizing zeroes after one through indian count system
// const hund = 10000000
// console.log(hund.toLocaleString('en-IN'));




// ++++++++++++++Maths++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.max(4,2,9,11,32));
// console.log(Math.min(4,2,9,11,32));
// console.log(Math.random()); 

// always gives the random output between 0 to 1

// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);