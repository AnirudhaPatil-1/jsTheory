//1. this in browser (non strict mode)
// console.log(this);
// // returns window object

// 2.
// function showThis(){
//     console.log(this);
// }

// showThis();
//returns windows object

// 3. 
// let obj = {
//     name: "Adam",
//     f: function(){
//         console.log(this);
//     }
// }

// obj.f();
// //returns the object

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

// obj.f(); 
// //returns window object