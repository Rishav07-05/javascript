
// ... is a rest operator 
function calculateCartPrice(val1 , val2 , ...num1){
    return num1 
}

console.log(calculateCartPrice(200 , 400 , 500 , 700 , 900));



// using function with object 
const user = {
    username: "Rox",
    price: 1000
}

function myobject(anyobject){
    console.log(`My username is ${anyobject.username} and price is ${anyobject.price}`);
}

console.log(myobject(user));


const arr = [200, 600, 899, 788]

function returnArray(getArray){
    return getArray
}
console.log(returnArray(arr));