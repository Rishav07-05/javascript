// IIFE => Immediately Invoked Function Expression

// (function coffee(){
//     console.log(`DB CONNECTED`);
// })();


// IIFE arrow function

(
    (name) => {
        console.log(`DB CONNECTED TO ${name}`); 
    }
)("RISHAV");