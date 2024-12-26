// {} or curly braces are only known as the scope 

let a = 40 // global scope

if(true){
    let a = 10 // local scope
    const b = 20
    // console.log("inner: ", a);
}

// console.log("Outer: ",a);
// console.log(b);


// nested scope 

// function one(){
//     const username = "Rishav"

//     function two(){
//         const web = "youtube"
//         console.log(username);
//         }
//     // console.log(web);

//     two()

// }
// one()


// nested scope 

// if(true){
//     const username = "Rishav"
//     if(username === "Rishav"){
//         const web = " youtube"
//         console.log(username + web);
//     }
// }



// two type of writing functions 


//1st way
function addone(num){
    return num + 1
}
addone(5)
console.log(addone(5));


// 2nd way 
const addtwo = function addone(num){
    return num + 2
}
console.log(addtwo(5));