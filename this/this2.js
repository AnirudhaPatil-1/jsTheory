'use strict'

// 1.
// console.log(this);
// //returns window object

// 2.
// function showThis(){
//     console.log(this);
// }

// showThis();
// //return undefined

// 3.
// let obj = {
//     name: "Adam",
//     f: function(){
//         console.log(this);
//     }
// }

// obj.f();
// //return object

// 4.
// let obj = {
//     name: "Adam",
//     f: function(){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }
// }

// obj.f();
// // returns undefined