// promises are objects 

// const promiseOne = new Promise(function(resolve, reject){
//     //Do any async task 
//     //DB calls , cryptography , networks
//     setTimeout(function(){
//         console.log('Async task completed');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task 2 completed');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise resolved");
// })



// const promiseThree =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Rishav", email: "batman@gmail.com"},1000)
//     })
// })

// promiseThree.then(function(u){
//     console.log(u);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Rishav" , password: "124"})
//         }
//         else{
//             reject("EROOR: Something went wrong")
//         }
//     } , 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Owl" , password: "124"})
        }
        else{
            reject("EROOR: Owl started swimming")
        }
    } , 1000)
})

// new approach other then promise with async await 

async function consumePromiseFive(){
    try {
    const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);    
    }
}
consumePromiseFive()