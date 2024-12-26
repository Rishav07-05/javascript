const name = "Rishav"
const repoCount = 20

// console.log(name + repoCount + " Value") // older method

//newer method 

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

// another way to take input in strings 
// these also provides us with the in built function of strings 

const game = new String('valorant-hox-purity-pixels')

console.log(game[0]);

//gives the length of the letter 
console.log(game.length);

//make the total letter into capitalize format
console.log(game.toUpperCase());

//give the character at the index given 
console.log(game.charAt(3));

// Gives the index at which n is present in the word 
console.log(game.indexOf('n'));

//slice the word only but not the reverse part 
const newName = game.substring(0,4);
console.log(newName)

//slice the word from the reverse also and normal also 
const anotherName = game.slice(-8,-2)
console.log(anotherName)

//Trims the extra spaces present
const newString = "   Rishav   "
console.log(newString)
console.log(newString.trim())

// replaces the desired element
const url = "https://rishav.com/rishav%20"
console.log(url.replace('%20' , '-'))

// check whether it's present or not 
console.log(url.includes("risv"))

// seprates or split the name into which they are sub-divided
console.log(game.split('-'))