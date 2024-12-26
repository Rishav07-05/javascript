const marvel_heroes = ["thor" , "ironman" , "captain america"]
const dc_heroes = ["superman" , "flash" , "batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]); // this is an array in array 

// const all_Heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_Heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator acts as concat function
// console.log(all_new_heroes)


const another_array = [1 , 2 , 3, [4 , 5 ,6] , [7 , 8 , [9 , 10]]]

// for flating or binding the array into one single array we use the flat function or we can say flat operator 

const real = another_array.flat(Infinity)
console.log(real);


// converting and checking the array into array 
// mainly used when we scrap data from the web server 

console.log(Array.isArray("Rishav")) // checks the array
console.log(Array.from("Rishav")) // convert into array


let a = 100
let b = 200
let c = 600
console.log(Array.of(a,b,c))