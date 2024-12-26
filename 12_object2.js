// const tinder = new Object() // singleton object

const tinder = {}
tinder.id = "123abc"
tinder.name = "Rishav"
tinder.isLoggedIn = false 
// console.log(tinder);

const another_user =  {
    email: "rox@chatgpt.com",
    fullname: {
        userfullname: {
            firstname: "Roxx",
            lastname: "Hound"
        }
    }
}

console.log(another_user.fullname.userfullname.firstname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const add = Object.assign({},obj1,obj2)
// const add = {...obj1, ...obj2} // spread method 
// console.log(add);


const database = [
    {
        id: 1,
    email: "hero@gmail.com"
    },
    {
        id: 2,
    email: "her@gmail.com"
    },
    {
        id: 3,
    email: "he@gmail.com"
    },
    {
        id: 4,
    email: "h@gmail.com"
    }
]

database[1].email
console.log(database[0].email);
console.log(Object.values(tinder));
console.log(Object.keys(tinder));
console.log(Object.keys(database));
console.log(Object.values(database));
console.log(tinder.hasOwnProperty('isLoggedIn'));