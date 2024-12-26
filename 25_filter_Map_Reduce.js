// filter applies a function with condition

// const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7]
// console.log(nums.filter((num) => {
//     return num > 2
// }));


// filter methods 

// const mygames = [
//     {
//         "game" : "CAR",
//         "GAMENAME" : "NFS"
//     },
//     {
//         "game" : "STORY",
//         "GAMENAME" : "GOD OF WAR"
//     },
//     {
//         "game" : "ACTION",
//         "GAMENAME" : "GTA 5"
//     },
//     {
//         "game" : "GRIEF SORROW",
//         "GAMENAME" : "Elden's Ring"
//     },
//     {
//         "game" : "EMOTIONAL",
//         "GAMENAME" : "The Last Of Us"
//     }
// ]


// let goat = mygames.filter((goatgames) => goatgames.GAMENAME === "GOD OF WAR")
// console.log(goat);
// goat = mygames.filter((goatgames) => goatgames.game === "EMOTIONAL")
// console.log(goat);



// map method 

// const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7]
// const newnums = nums.map((num) => num + 10)
// console.log(newnums)


// chaining => adding up many method like map,filter and many more

// const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7]
// const newnums = nums
// .map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num > 23)

// console.log(newnums)



// reduce method 

// const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7]
// const newnums = nums.reduce((acc , currentval) => acc + currentval , 0)
// console.log(newnums);