'use strict'
//1. 
// console.log(this); //returns empty object

// 2. 
// function thisFn(){
//     console.log(this);
// }

// thisFn(); //returns undefined

// 3.
// let obj = {
//     name: "Adam",
//     f: function(){
//         console.log(this);
//     }
// }

// obj.f(); //return whole object

//4. 
// let obj = {
//     name: "Adam",
//     f: function(){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }
// }

// obj.f(); //returns undefined