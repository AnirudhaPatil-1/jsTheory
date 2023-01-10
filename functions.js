// function add (a, b){
//     if(isNaN(a) || isNaN(b)){

const { arrayAsString } = require("pdf-lib");

        
//         return "invalid arguments"
//     }
//     return parseInt(a) + parseInt(b);
// }
// console.log(add("1", 2));

// let add = function(a, b){
//     return parseInt(a) + parseInt(b);
// }

// const arr = [1, 2, 3, 4, 5];
// arr[3] = 10;// can make changes inside array when const cannot be reassigned
// // arr = [2, 3, 4, 5]; 
// console.log(arr);

//FOR EACH METHOD
// let arr = ["a", "b", "c", "d"];

// arr.forEach(function(value, index, arr){
//     console.log(value + " " + index);
// })

// function function1(myArg1, myArg2, myArgx,data){
//     console.log(myArg1, myArg2, myArgx, data);
// }
// arr.forEach(function1.bind(this, "hello1", "hello2", "hellox"));

// function myForEach(arr, callbackFn){
//     for(let i = 0; i <= arr.length - 1; i++){
//         callbackFn(arr[i], i, arr);
//     }
// }
// let arr = [1, 2, 3, 4];
// myForEach(arr, call);

// function call(value, index, array){
//     console.log(value, index, array);
// }

// let arr = [1, 2, 3, 4];
// for(let i = 0; i <= arr.length - 1; i++){
//     arr[i] += 2;
// }
// console.log(arr);

// let newArr = arr.map(function(value){
//     return value + 2;
// })
// console.log(arr);
// console.log(newArr);

// let newArr = arr.map(function(value){
//     if(value % 2 == 0){
//         return 0;
//     }else{
//         return value;
//     }
// })
// console.log(newArr);

//SLICE AND SPLICE method
//SLICE =>  .slice(si, ei+1) = return the piece from si to ei as like piece of cake
//does not change original array
// console.log(arr.slice(1, 3));
// console.log(arr);
// //SPLICE => .splice(si, no of elements of remove including si) and returns the deleted elements
// //makes changes in original array
// console.log(arr.splice(1, 3));
// console.log(arr);

// let arr = [1,2,2,2,3,3,3,4,5,6,7,8,9,10];
// let tempArr = [...arr]; //parse an array method ie COPYING ARRAY
// console.log(tempArr);

// arr = arr.filter(function(value){
//     // if(value % 2 == 0){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     return value % 2 == 0;
// })
// console.log(arr);

//SORT
//SORT  in itself is not reliable so always pass comparator
//.sort() sorts likes as a dictionary
let arr = [5, 4, 2, 3, 1];
// arr.sort(function(a, b){
//     console.log(a, b);
//     // return a - b;
//     if(a > b){
//         return 1;
//     }else if(a == b){
//         return 0;
//     }else{
//         return -1;
//     }
// })
// console.log(arr);

//INCLUDES
// if a element is present in array returns "true" else returns "false"
// console.log(arr.includes(6));
//output => false