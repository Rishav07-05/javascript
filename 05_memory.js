// ---> stack and heap 

// ---- stack for primitive type 
// ---- heap for all non-primitive type


let myname =  "Rishav"
let anothername = myname
anothername = "Hello"

console.log(myname);
console.log(anothername);

let user1 = {
    email: "user@ybl",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "rishav@gmail.com"

console.log(user1.email)
console.log(user2.email)