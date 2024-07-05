// singleton
//Object.create is a constructer method and in these only singleton is formed 


// object literals

const sym = Symbol("Key")

const JsUser = {
    name: "Rishav",
    // sym: "key", //in these output is same but differs in the type and gives string as type instead of symbol.

    [sym]: "key", //the correct syntax to display symbol
    "full name": "Roxx" ,
    age: 19,
    location: "Kerala" ,
    email: "rishav@microsoft.com",
    isLoggedIn: false ,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser["email"]);
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[sym]);
// console.log(typeof sym);

// JsUser.email = "rishav@google.com"
// Object.freeze(JsUser) // freeze the object and makes it unable to change
// JsUser.email = "rishav@amazon.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello User");
}
JsUser.greeting2 = function(){
    console.log(`Hello User with name ${this["full name"]}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());