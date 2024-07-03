// array

// const arr = [0,23,56,12,89,"rishav",true]
// console.log(arr[5]);

const arr1 = new Array(1,34,2,89)
// // console.log(arr1[1]);


// // Built in methods in array 

// arr1.push(12) // adds the given value
// console.log(arr1);

// arr1.pop()
// console.log(arr1); // deletes the last value in the array

// console.log(arr1.includes(4)); //checks the presence in the array ans gives the output in boolean format 
// console.log(arr1.indexOf(89)); //checks the presence in the array and gives the index

// const newArr = arr1.join() // converts arrays into string format

// console.log(newArr);
// console.log(arr1);

// console.log(typeof newArr);
// console.log(typeof arr1);


// slice & splice functions


console.log("A",arr1);
const mynew = arr1.slice(1,3)

console.log(mynew);
console.log("B",arr1);

const mynew1 = arr1.splice(1,3)
console.log("C",arr1);
console.log(mynew1);