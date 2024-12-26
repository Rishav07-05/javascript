function sayName(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayName();

// function addTwoNum(number1 , number2){
//     console.log(number1 + number2);
// }


function addTwoNum(number1 , number2){
    return number1 + number2
}

const result = addTwoNum(5,7);
// console.log("Result: ", result);


function loginUser(username){
    if(username === undefined){
        console.log("Please enter a valid username");
        return
    }
    return `${username} just logged in`
}

const user = loginUser("Roxx")
console.log(user);



