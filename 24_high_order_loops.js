// for of loop

// const arr = [1 , 3 , 2 , 4 , 5 , 7]

// for (const i of arr) {
//     // console.log(i);
// }


// const myname = "Rishav is batman"
// for (const name of myname) {
//     if(name == " "){
//         console.log("Kya Baat hai jii :) ");
//     }
//     console.log(`All chars of my names are: ${name}`);
// }


// Map

// const map = new Map()
// map.set('IN' , "India")
// map.set('BRA' , "Brazil")
// map.set('RUS' , "Russia")
// map.set('USA' , "United States Of America")

// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key , '=>' , value);
// }


//object are not iterable for 

// const mygames = {
//     "game1" : "NFS",
//     "game2" : "GOD OF WAR",
//     "game3" : "GTA 5",
//     "game4" : "Elden's Ring",
//     "game5" : "The Last Of Us"
// }

// for (const [key,val] of mygames) {
//     console.log(`My games are ${val}`)
//     console.log(`List of my games are ${key}`)
// }



// to loop in with object we use for in loop it can also we used in different places but for now we will use it for objects 


// for in loop in object


// const mygames = {
//     "game1" : "NFS",
//     "game2" : "GOD OF WAR",
//     "game3" : "GTA 5",
//     "game4" : "Elden's Ring",
//     "game5" : "The Last Of Us"
// }

// for (const key in mygames) {
//     console.log(`List of my games are ${key}`)
//     console.log(`My games are ${mygames[key]}`)
// }


// for in loop in array

// const arr = ["Chotta bheem" , "Raju" , "Jaggu" , "Chuttki"]
// for (const index in arr) {
//     console.log(`The index of array are : ${index}`);
//     console.log(`The values in array are : ${arr[index]}`);
// }



// for each loop in array 

// const arr = ["Chotta bheem" , "Raju" , "Jaggu" , "Chuttki"]

// arr.forEach( function (value) {
//     console.log(value);
// });

// arr.forEach( value => {
//     console.log(value);
// });

// "game2" : "GOD OF WAR",
//         "game3" : "GTA 5",
//         "game4" : "Elden's Ring",
//         "game5" : "The Last Of Us"

const mygames = [
    {
        "game" : "CAR",
        "GAMENAME" : "NFS"
    },
    {
        "game" : "STORY",
        "GAMENAME" : "GOD OF WAR"
    },
    {
        "game" : "ACTION",
        "GAMENAME" : "GTA 5"
    },
    {
        "game" : "GRIEF SORROW",
        "GAMENAME" : "Elden's Ring"
    },
    {
        "game" : "EMOTIONAL",
        "GAMENAME" : "The Last Of Us"
    }
]
       

mygames.forEach((items) => {
    console.log(items.game);
    console.log(items.GAMENAME);
});